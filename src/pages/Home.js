import { useContext } from "react";
import styled from "styled-components";

// *** data & hooks
import { LoggedInContext } from "../context/loggedInContext";

// *** components
import SignIn from "../components/_molecules/SignIn";
import Welcome from "../components/_views/Welcome";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem;
`;

const Home = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

  if (loggedIn.logged_in) {
    let firstName = loggedIn.logged_name.split(" ")[0];
    return (
      <Wrapper>
        <Welcome name={firstName} />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <SignIn />
      </Wrapper>
    );
  }
};

export default Home;
