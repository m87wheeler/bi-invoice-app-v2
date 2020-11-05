import { useContext, useEffect, useRef, useState } from "react";
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
  const [loadCount, setLoadCount] = useState(7); // number of default load dates
  const scroll = useRef(null);

  // ? automatically scroll to bottom on renders
  useEffect(() => {
    scroll.current.scrollTop = scroll.current.scrollHeight;
  }, [messageThread]);

  // ? ensure load count is less than messageThread.length
  useEffect(() => {
    if (messageThread.length < loadCount)
      setLoadCount(messageThread.length - 1);
  }, [loadCount, messageThread]);

  // ? decrease load count on scrollTop === 0
  const handleScroll = (e) => {
    if (e.target.scrollTop === 0 && loadCount < messageThread.length - 1) {
      setTimeout(() => {
        setLoadCount((loadCount) => (loadCount += 1));
      }, 500);
    }
  };

  return (
    <Wrapper ref={scroll} onScroll={handleScroll}>
      {messageThread.map(
        (date, i) =>
          i >= messageThread.length - loadCount && (
            <MessagingDateThread key={date.id} data={date} />
          )
      )}
    </Wrapper>
  );
};

export default MessagingThread;
