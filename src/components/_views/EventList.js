import { useContext, useState, useReducer } from "react";
import styled from "styled-components";

// *** data & hooks
import { UserContext } from "../../context/userContext";
import { LoggedInContext } from "../../context/loggedInContext";
import { EventContext } from "../../context/eventContext";
import EventFilters from "../_molecules/EventFilters";
import { modalReducer } from "../../reducers/modalReducer";

// *** components
import EventEntry from "../_molecules/EventEntry";
import Modal from "../_molecules/Modal";
// import { eventFilterReducer } from "../../reducers/eventFilterReducer";

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
  /* eslint-disable */
  const [userList, setUserList] = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [eventList, setEventList] = useContext(EventContext);
  /* eslint-enable */
  const [deniedModal, dispatchDenied] = useReducer(modalReducer, false);
  const [removeModal, dispatchRemove] = useReducer(modalReducer, false);
  const [removeId, setRemoveId] = useState("");

  // ? handle all filter events on change
  // TODO filter and sort functions
  const filterChange = (e) => {};

  // ? confirm if user can perform this action
  const promptRemoveItem = (id) => {
    let current = loggedIn.logged_id;
    let user = userList.find((user) => user.user_data.id === current);
    let permission = user.privileges.edit_event;
    if (!permission) {
      dispatchDenied({ type: "REVEAL" });
      return;
    }
    setRemoveId(id);
    dispatchRemove({ type: "REVEAL" });
  };
  // ? delete item from context
  const handleRemoveItem = () => {
    dispatchRemove({ type: "HIDE" });
    let events = eventList.filter((event) => event.id !== removeId);
    setEventList(events);
  };
  // ? hide modals
  const hideModal = () => {
    dispatchDenied({ type: "HIDE" });
    dispatchRemove({ type: "HIDE" });
  };

  return (
    <Wrapper>
      <EventFilters onChange={filterChange} />
      <Events>
        {eventList.map((event) => (
          <EventEntry key={event.id} data={event} onRemove={promptRemoveItem} />
        ))}
      </Events>
      <Modal
        text="You do not have permission to perform this action."
        confirm="OK"
        onConfirm={hideModal}
        reveal={deniedModal}
        singleOption
      />
      <Modal
        text="Are you sure you want to permanently remove this event?"
        confirm="Yes"
        decline="No"
        onConfirm={handleRemoveItem}
        onDecline={hideModal}
        reveal={removeModal}
      />
    </Wrapper>
  );
};

export default EventList;
