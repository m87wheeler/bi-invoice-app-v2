import styled from "styled-components";

// *** components
import Select from "../_atoms/Select";
import RadioOptions from "../_atoms/RadioOptions";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 1rem;
`;

const StyledSelect = styled(Select)`
  grid-column: 1 / span 2;
`;

const EventFilters = (props) => {
  return (
    <Wrapper filterValues={() => {}}>
      <StyledSelect
        label="Sort"
        name="sort"
        options={[
          { text: "Date (Closest First)", value: "date_closest" },
          { text: "Date (Furthest First)", value: "date_furthest" },
          { text: "Priority (High - Low)", value: "priority_hl" },
          { text: "Priority (Low - Hight)", value: "priority_lh" },
          { text: "Category (A - Z)", value: "category_az" },
          { text: "Category (Z - A)", value: "category_za" },
        ]}
        onChange={props.onChange}
      />
      <RadioOptions
        label="Filter by assigned"
        name="filter_assigned"
        values={["all", "only_me"]}
        onChange={props.onChange}
      />
      <RadioOptions
        label="Filter by author"
        name="filter_author"
        values={["all", "only_me"]}
        onChange={props.onChange}
      />
    </Wrapper>
  );
};

export default EventFilters;
