import { useContext } from "react";
import styled from "styled-components";

// *** data & hooks
import { LoggedInContext } from "../../context/loggedInContext";

// *** components
import Button from "../_atoms/Button";

// *** styled components
const Wrapper = styled.footer`
  width: 100%;
  height: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.1rem;
  align-content: stretch;
  padding: 0.1rem 0;
  background: #344351;
  color: #eee;
  text-align: center;

  p {
    grid-column: 1 / span 3;
    align-self: center;
    font-size: 0.75rem;
  }
`;

const Footer = () => {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

  return (
    <Wrapper>
      {loggedIn.logged_in ? (
        <>
          <Button link="/">Home</Button>
          <Button link="/clients">Clients</Button>
          <Button link="/events">Messaging</Button>
        </>
      ) : (
        <p>&copy; 2020</p>
      )}
    </Wrapper>
  );
};

export default Footer;
