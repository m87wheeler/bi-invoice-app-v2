import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  max-width: 80%;
  min-width: 40%;
  padding: 0.75rem 0.5rem 0.5rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 0.25rem;
  background: #ccc;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background: #566573;
  }
`;

const User = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 0.9rem;
  white-space: pre-wrap;
`;

const Time = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  justify-self: flex-end;
`;

const MessageCard = (props) => {
  const formatTime = (date) => date.substr(16, 5);

  return (
    <Wrapper className={props.className} align={props.align}>
      <User>{props.data.name}</User>
      <Message>{props.data.message}</Message>
      <Time>{formatTime(props.data.date)}</Time>
    </Wrapper>
  );
};

export default MessageCard;
