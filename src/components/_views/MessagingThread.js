import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

// *** data & hooks
import { MessagingContext } from "../../context/messagingContext";

// *** components
import MessagingDateThread from "../_organisms/MessagingDateThread";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  row-gap: 0.5rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MessagingThread = (props) => {
  // eslint-disable-next-line
  const [messageThread, setMessageThread] = useContext(MessagingContext);
  const scroll = useRef(null);

  useEffect(() => {
    scroll.current.scrollTop = scroll.current.scrollHeight;
  }, [messageThread]);

  return (
    // TODO lazy loading for dates past 7 days
    <Wrapper ref={scroll}>
      {messageThread.map((date) => (
        <MessagingDateThread key={date.id} data={date} />
      ))}
    </Wrapper>
  );
};

export default MessagingThread;
