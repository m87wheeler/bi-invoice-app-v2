import { useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// *** data & hooks
import { MessagingContext } from "../context/messagingContext";
import { LoggedInContext } from "../context/loggedInContext";

// *** components
import MessageInput from "../components/_molecules/MessageInput";
import MessagingThread from "../components/_views/MessagingThread";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 7rem;
  height: calc(100vh - 5.5rem);
  overflow: hidden;
`;

const Notification = styled.p`
  display: none;
  position: fixed;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  max-height: 1.825rem;
  padding: 0.1rem 0.25rem;
  font-size: 0.65rem;
  line-height: 1.25;
  text-align: center;
  background: rgba(211, 211, 211, 0.75);
  z-index: 99;
`;

const Messaging = () => {
  const [messageThread, setMessageThread] = useContext(MessagingContext);
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

  const checkDateTypeToUTC = (date) => {
    let utc;
    if (typeof date === "string") {
      utc = new Date(date).toUTCString();
    } else {
      utc = date.toUTCString();
    }
    return utc;
  };

  const handleSubmit = (data) => {
    let threadIndex = messageThread.findIndex((thread) => {
      let threadDate = checkDateTypeToUTC(thread.date);
      let dataDate = checkDateTypeToUTC(data.date);
      return threadDate && dataDate
        ? threadDate.substr(5, 11) === dataDate.substr(5, 11)
        : null;
    });
    let messages = [...messageThread];
    if (threadIndex >= 0) {
      // update thread
      let thread = [...messages[threadIndex].thread];
      let updatedThread = [...thread, data];
      messages[threadIndex].thread = updatedThread;
    } else {
      // create new thread
      let newThread = {
        id: uuidv4(),
        date: new Date(),
        thread: [data],
      };
      messages = [...messages, newThread];
    }
    setMessageThread(messages);
  };

  return (
    <Wrapper>
      <Notification>
        Please be aware messages are not yet encrypted so may be visible to
        others.
      </Notification>
      <MessagingThread />
      <MessageInput user={loggedIn} onClick={handleSubmit} />
    </Wrapper>
  );
};

export default Messaging;
