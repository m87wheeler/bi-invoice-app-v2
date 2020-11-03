import styled from "styled-components";
import Button from "../_atoms/Button";

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.1rem;
  align-content: stretch;
  padding: 0.1rem 0;
  background: #344351;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Button link="/">Home</Button>
      <Button link="/clients">Clients</Button>
      <Button link="/events">Events</Button>
    </Wrapper>
  );
};

export default Footer;
