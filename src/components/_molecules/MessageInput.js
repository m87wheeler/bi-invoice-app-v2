import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// *** data & hooks
import { handleChange } from "../../assets/functions/functions";

// *** components
import Input from "../_atoms/Input";
import Button from "../_atoms/Button";

const Wrapper = styled.div`
  height: 6rem;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 0.5rem;
`;

const StyledInput = styled(Input)`
  height: ${(props) => `${props.height * 1.5}rem`};
  align-self: flex-start;
`;

const MessageInput = (props) => {
  const [messageInput, setMessageInput] = useState({
    id: uuidv4(),
    user: props.user.logged_id,
    name: props.user.logged_name,
    date: `${new Date()}`,
    message: "",
  });

  const handleSubmit = () => {
    props.onClick(messageInput);
    setMessageInput({
      ...messageInput,
      id: uuidv4(),
      message: "",
    });
  };

  return (
    <Wrapper>
      <StyledInput
        name="message"
        type="textarea"
        value={messageInput.message}
        onChange={(e) => setMessageInput(handleChange(e, messageInput))}
        height={props.height || 1}
      />
      <Button onClick={handleSubmit}>Send</Button>
    </Wrapper>
  );
};

export default MessageInput;
