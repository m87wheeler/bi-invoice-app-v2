import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  text-align: center;
  text-transform: capitalize;
  background: ${(props) =>
    props.level.toLowerCase() === "high"
      ? "crimson"
      : props.level.toLowerCase() === "regular"
      ? "orange"
      : "seagreen"};
  color: #fff;
`;

const PriorityTags = (props) => {
  return (
    <Wrapper level={props.level} style={props.style}>
      {props.level}
    </Wrapper>
  );
};

export default PriorityTags;
