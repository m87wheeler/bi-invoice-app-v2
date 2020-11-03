import styled from "styled-components";

// *** data & hooks

// *** components
import Select from "../_atoms/Select";
import Button from "../_atoms/Button";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
  align-items: flex-end;
  background: #eee;
`;

const StyledButton = styled(Button)`
  grid-column: 1 / span 2;
`;

const TimeSelect = (props) => {
  // ? generate 24 hours array of objects
  let hours = [];
  const minutes = [
    { text: "00", value: "0" },
    { text: "15", value: "15" },
    { text: "30", value: "30" },
    { text: "45", value: "45" },
  ];
  for (let i = 0; i < 24; i++) {
    let h = {
      text: i < 10 ? `0${i}` : `${i}`,
      value: `${i}`,
    };
    hours.push(h);
  }

  return (
    <Wrapper>
      <Select
        label="Event Start"
        onChange={props.onChange}
        name="start_h"
        options={hours}
        required={!props.allDay}
        disabled={props.allDay}
        defaultValue={"9"}
      />
      <Select
        onChange={props.onChange}
        name="start_m"
        options={minutes}
        required={!props.allDay}
        disabled={props.allDay}
        defaultValue={"00"}
      />
      <Select
        label="Event End"
        onChange={props.onChange}
        name="end_h"
        options={hours}
        required={!props.allDay}
        disabled={props.allDay}
        defaultValue={"10"}
      />
      <Select
        onChange={props.onChange}
        name="end_m"
        options={minutes}
        required={!props.allDay}
        disabled={props.allDay}
        defaultValue={"00"}
      />
      <StyledButton
        onClick={props.onClick}
        onChange={props.onChange}
        name="all_day"
      >
        {!props.allDay ? "All Day" : "Choose Times"}
      </StyledButton>
    </Wrapper>
  );
};

export default TimeSelect;
