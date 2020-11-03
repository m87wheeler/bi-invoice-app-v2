import styled from "styled-components";
import { Link } from "react-router-dom";

import EventList from "../components/_views/EventList";

const Wrapper = styled.div`
  padding: 1rem;
`;

const AddNew = styled(Link)`
  position: fixed;
  right: 1rem;
  bottom: 3rem;
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  background: #566573;
  color: #eee;
  border-radius: 100%;
  font-size: 2.5rem;
  line-height: 3.6rem;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
`;

const Events = (props) => {
  return (
    <Wrapper>
      <AddNew to="events/new">+</AddNew>
      <EventList />
    </Wrapper>
  );
};

export default Events;
