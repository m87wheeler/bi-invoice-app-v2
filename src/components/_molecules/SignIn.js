import { useReducer, useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// *** data
import { UserContext } from "../../context/userContext";
import { LoggedInContext } from "../../context/loggedInContext";
import { formReducer } from "../../reducers/formReducer";
import { generateForm } from "../../assets/functions/functions";

// *** components
import Button from "../_atoms/Button";

// *** styled components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  row-gap: 1rem;
`;

const SignIn = () => {
  const [userList, setUserList] = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [formState, dispatch] = useReducer(formReducer, [
    {
      id: uuidv4(),
      alert: false,
      label: "Username",
      name: "username",
      required: true,
      type: "text",
      value: "",
    },
    {
      id: uuidv4(),
      alert: false,
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      value: "",
    },
  ]);

  const handleChange = (e) =>
    dispatch({
      type: "INPUT",
      name: e.target.name,
      value: e.target.value,
    });

  const handleSubmit = () => {
    let username = formState[0].value;
    let password = formState[1].value;

    // carry out checks if inputs provided
    if (!username || !password) {
      !username
        ? dispatch({ type: "ALERT", name: "username", alert: true })
        : dispatch({ type: "ALERT", name: "username", alert: false });
      !password
        ? dispatch({ type: "ALERT", name: "password", alert: true })
        : dispatch({ type: "ALERT", name: "password", alert: false });
      return;
    }

    // if inputs meet req sign in user
    let user = userList.find((user) => user.user_data.username === username);
    if (user.user_data.password === password) {
      setLoggedIn({
        ...loggedIn,
        logged_in: true,
        logged_id: user.user_data.id,
        logged_name: user.personal_data.name,
        session_id: uuidv4(),
        session_start: new Date(),
      });
    }
  };

  return (
    <Wrapper>
      {generateForm(formState, handleChange)}
      <Button onClick={handleSubmit}>Sign In</Button>
    </Wrapper>
  );
};

export default SignIn;
