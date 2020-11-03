import { useContext, useState } from "react";
import styled from "styled-components";

// *** data & hooks
import { EventContext } from "../../context/eventContext";
import EventFilters from "../_molecules/EventFilters";
import {
  handleChange,
  sortFilterEvents,
} from "../../assets/functions/functions";

// *** components
import EventEntry from "../_molecules/EventEntry";

// *** styled components
const Wrapper = styled.div``;

const Events = styled.div`
  padding: 1rem 0 4rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  row-gap: 0.25rem;
`;

const EventList = (props) => {
  // eslint-disable-next-line
  const [eventList, setEventList] = useContext(EventContext);
  const [filterSort, setFilterSort] = useState({
    sort: "",
    filter_assigned: "",
    filter_author: "",
  });

  // ? handle all filter events on change
  const filterChange = (e) => {
    setFilterSort(handleChange(e, filterSort));
    let sortedData = sortFilterEvents(filterSort, eventList);
    console.log(sortedData);
    // setEventList({
    //   ...eventList,
    //   sortedData,
    // });
  };

  return (
    <Wrapper>
      <EventFilters onChange={filterChange} />
      <Events>
        {eventList.map((event) => (
          <EventEntry key={event.id} data={event} />
        ))}
      </Events>
    </Wrapper>
  );
};

export default EventList;
