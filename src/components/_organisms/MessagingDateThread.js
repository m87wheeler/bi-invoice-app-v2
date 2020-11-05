import { useContext } from "react";
import styled, { keyframes } from "styled-components";

// *** data & hooks
import { LoggedInContext } from "../../context/loggedInContext";

// *** components
import MessageCard from "../_atoms/MessageCard";
import MessageDatestamp from "../_atoms/MessageDatestamp";

// *** styled components
const StyledCard = styled(MessageCard)`
  margin: 0.25rem 0;
  align-self: ${(props) => (props.align ? "flex-end" : "flex-start")};
  background: ${(props) => (props.align ? "#ddd" : "#bbb")};
`;

const shake = keyframes`
    0% { margin-left: 0; }
    20% { margin-left: .5rem; }
    40% { margin-left: -.5rem }
    60% { margin-left: .5rem }
    80% { margin-left: -.5rem }
    100% { margin-left: 0 }
`;

const StyledDatestamp = styled(MessageDatestamp)`
  align-self: center;
  margin: 1rem 0 0.5rem;
  animation-name: ${shake};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const MessagingDateThread = (props) => {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

  return (
    <Wrapper>
      <StyledDatestamp date={props.data.date} />
      {props.data.thread.map((message) => (
        <StyledCard
          key={message.id}
          data={message}
          align={message.user === loggedIn.logged_id ? true : false}
        />
      ))}
    </Wrapper>
  );
};

export default MessagingDateThread;
