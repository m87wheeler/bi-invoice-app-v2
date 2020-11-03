import styled from "styled-components";

// *** data & hooks
import { generateDateArr } from "../../assets/functions/functions";

// *** components
import Select from "../_atoms/Select";
// import Button from "../_atoms/Button";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 0.25rem;
  background: #eee;
`;

// const StyledButton = styled(Button)`
//   grid-column: 1 / span 2;
// `;

const DateSelect = (props) => {
  return (
    <Wrapper>
      <Select
        label="Month"
        onChange={props.onChange}
        name="month"
        options={generateDateArr("month")}
        required
        defaultValue={props.defaultMonth}
      />
      <Select
        label="Year"
        onChange={props.onChange}
        name="year"
        options={generateDateArr("year")}
        required
        defaultValue={props.defaultYear}
      />
      <Select
        label="Date"
        onChange={props.onChange}
        name="date"
        options={generateDateArr("date", props.monthValue, props.yearValue)}
        required
        defaultValue={props.defaultDate}
        style={{ gridColumn: "1 / span 2" }}
      />
      {/* <StyledButton onClick={props.onClick}>Today</StyledButton> */}
    </Wrapper>
  );
};

export default DateSelect;
