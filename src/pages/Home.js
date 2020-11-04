import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// *** data & hooks
import { LoggedInContext } from "../context/loggedInContext";

// *** components
import Title from "../components/_atoms/Title";
import SignIn from "../components/_molecules/SignIn";
import EventList from "../components/_views/EventList";
import Clock from "../components/_atoms/Clock";

// *** styled components
const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
`;

const StyledClock = styled(Clock)`
  position: sticky;
  top: 0rem;
  left: 0;
  background: #fff;
`;

const AddNew = styled(Link)`
  position: fixed;
  right: 1rem;
  bottom: 3rem;
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  background: #566573;
  color: #eee;
  border-radius: 100%;
  font-size: 2.5rem;
  line-height: 3.6rem;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
`;

const Home = () => {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

  if (loggedIn.logged_in) {
    let firstName = loggedIn.logged_name.split(" ")[0];
    return (
      <Wrapper>
        <StyledClock />
        <AddNew to="events/new">+</AddNew>
        <Title h={2} style={{ textAlign: "center" }}>
          Welcome {firstName}
        </Title>
        <EventList />
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
