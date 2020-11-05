import styled from "styled-components";

const Wrapper = styled.label`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 0.25rem;

  p {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const Required = styled.span`
  color: crimson;
`;

const InputWrapper = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.25;
  border: ${(props) =>
    props.alert ? "2px solid crimson" : "2px solid #566573"};
  border-radius: 0.25rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.25;
  border: ${(props) =>
    props.alert ? "2px solid crimson" : "2px solid #566573"};
  border-radius: 0.25rem;
  resize: none;
`;

const Input = (props) => {
  return (
    <Wrapper HtmlFor={props.name} className={props.className}>
      {props.label && (
        <p>
          {props.label} {props.required && <Required>*</Required>}
        </p>
      )}
      {props.type === "textarea" ? (
        <TextArea
          disabled={props.disabled}
          name={props.name}
          placeholder={props.placeholder}
          required={props.required}
          type="textarea"
          value={props.value || ""}
          onChange={props.onChange}
        />
      ) : (
        <InputWrapper
          disabled={props.disabled}
          name={props.name}
          placeholder={props.placeholder}
          required={props.required}
          type={props.type || "text"}
          value={props.value || ""}
          onChange={props.onChange}
        />
      )}
      {props.alert ? <p>Please provide a valid {props.name}</p> : null}
    </Wrapper>
  );
};

export default Input;
