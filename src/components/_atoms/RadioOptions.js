import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
`;

const Label = styled.label`
  width: 100%;

  p {
    font-size: 0.9rem;
    font-weight: 600;
  }

  span {
    margin: 0 0.75rem 0 0.25rem;
    text-transform: capitalize;
    white-space: nowrap;
  }
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;

const RadioOptions = (props) => {
  const formatValue = (str) => {
    let split = str.split("_");
    return split.join(" ");
  };

  return (
    <Wrapper>
      <Label htmlFor="filter_author" onChange={props.onChange}>
        <p>{props.label}</p>
        {props.values &&
          props.values.map((value, i) => (
            <span>
              <Input
                key={`${value}_${i}`}
                type="radio"
                name={props.name}
                value={value}
                defaultChecked={i === 0 ? true : false}
              />
              {formatValue(value)}
            </span>
          ))}
      </Label>
    </Wrapper>
  );
};

export default RadioOptions;
