import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
  display: ${(props) => (props.inline ? "inline-block" : "block")};
  text-decoration: none;
`;

const Wrapper = styled.button`
  display: inline;
  width: 100%;
  min-width: 6rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  color: #eee;
  background: ${(props) =>
    props.danger ? "crimson" : props.confirm ? "seagreen" : "#566573"};
  border: ${(props) =>
    props.danger
      ? "2px solid crimson"
      : props.confirm
      ? "2px solid seagreen"
      : "2px solid #566573"};
  border-radius: 0.25rem;
  cursor: pointer;

  &:disabled {
    background: #aaa;
    color: #555;
    border: 2px solid #aaa;
  }
`;

const Button = (props) => {
  return props.link ? (
    <LinkWrapper
      to={props.link}
      className={props.className}
      style={props.style}
    >
      <Wrapper
        confirm={props.confirm}
        danger={props.danger}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </Wrapper>
    </LinkWrapper>
  ) : (
    <Wrapper
      className={props.className}
      confirm={props.confirm}
      danger={props.danger}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </Wrapper>
  );
};
export default Button;
