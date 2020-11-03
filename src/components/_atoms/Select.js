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

const SelectWrapper = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.25;
  border: 2px solid #566573;
  border-radius: 0.25rem;
  text-transform: capitalize;
  background: #fff;
`;

const Input = (props) => {
  return (
    <Wrapper
      HtmlFor={props.name}
      className={props.className}
      style={props.style}
    >
      <p>
        {props.label} {props.required && <Required>*</Required>}
      </p>
      <SelectWrapper
        defaultValue={
          (props.defaultValue && props.defaultValue) ||
          (props.options && props.options[0])
        }
        onChange={props.onChange}
        name={props.name}
        disabled={props.disabled}
      >
        {props.options &&
          props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
      </SelectWrapper>
    </Wrapper>
  );
};

export default Input;
