import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// *** data and hooks
import { UserContext } from "../context/userContext";
import { ClientContext } from "../context/clientContext";
import { LoggedInContext } from "../context/loggedInContext";
import { EventContext } from "../context/eventContext";
import { handleChange } from "../assets/functions/functions";

// *** components
import NewEventForm from "../components/_views/NewEventForm";
import Modal from "../components/_molecules/Modal";

// *** styled components
const Wrapper = styled.div`
  display: grid;
  row-gap: 0.5rem;
  padding: 1rem;
`;

const NewEvent = (props) => {
  /* eslint-disable */
  const [clientList, setClientList] = useContext(ClientContext);
  const [userList, setUserList] = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  /* eslint-enable */
  const [eventList, setEventList] = useContext(EventContext);
  const [values, setValues] = useState({
    id: uuidv4(),
    title: "",
    date: {
      all_day: false,
      start: "",
      end: "",
    },
    description: "",
    category: "deadline",
    priority: "regular",
    creation: {
      author: "",
      date: new Date(),
    },
    assigned_to: "none",
    complete: false,
    client: "none",
  });
  const [modalReveal, setModalReveal] = useState(false);

  // ? update author of event
  useEffect(() => {
    setValues((values) => ({
      ...values,
      creation: {
        ...values.creation,
        author: loggedIn.logged_id,
      },
    }));
  }, [loggedIn.logged_id]);

  // ? toggles all_day key in values
  const handleClick = () =>
    setValues({
      ...values,
      date: {
        ...values.date,
        all_day: !values.all_day,
      },
    });
  // ? submit entries
  const handleSubmit = (data) => {
    setModalReveal(true);
    // convert data to date strings and set state
    const { year, month, date, all_day, start_h, start_m, end_h, end_m } = data;
    const fmonth = month < 9 ? `0${parseInt(month) + 1}` : parseInt(month) + 1;
    const fdate = date < 10 ? `0${date}` : date;
    setValues((values) =>
      all_day
        ? {
            ...values,
            date: {
              ...values.date,
              all_day: true,
              start: `${year}-${fmonth}-${fdate}T00:00:00.000Z`,
              end: `${year}-${fmonth}-${fdate}T23:59:59.000Z`,
            },
          }
        : {
            ...values,
            date: {
              ...values.date,
              start: `${year}-${fmonth}-${fdate}T${start_h}:${start_m}:00.000Z`,
              end: `${year}-${fmonth}-${fdate}T${end_h}:${end_m}:00.000Z`,
            },
          }
    );
  };

  const confirmSubmit = () => {
    setEventList([...eventList, values]);
    setModalReveal(false);
  };

  return (
    <Wrapper>
      <h1>New Event</h1>
      <NewEventForm
        onChange={(e) => setValues(handleChange(e, values))}
        onClick={handleClick}
        onSubmit={handleSubmit}
        state={values}
        users={userList}
        clients={clientList}
      />
      <Modal
        onConfirm={confirmSubmit}
        onDecline={() => setModalReveal(false)}
        reveal={modalReveal}
        text={"Confirm create event"}
      />
    </Wrapper>
  );
};

export default NewEvent;
