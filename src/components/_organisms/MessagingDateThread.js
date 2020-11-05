import { useContext } from "react";
import styled from "styled-components";

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

const StyledDatestamp = styled(MessageDatestamp)`
  align-self: center;
  margin: 1rem 0 0.5rem;
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
