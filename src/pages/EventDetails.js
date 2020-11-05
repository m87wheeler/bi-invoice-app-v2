import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Title from "../components/_atoms/Title";

// *** data & hooks
import { EventContext } from "../context/eventContext";
import { UserContext } from "../context/userContext";
import { ClientContext } from "../context/clientContext";
import {
  utcDateToDateString,
  utcDateToTimeString,
} from "../assets/functions/functions";
import PriorityTag from "../components/_atoms/PriorityTag";

// *** components
import Button from "../components/_atoms/Button";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: auto;
  row-gap: 0.75rem;
  align-items: flex-start;
`;

const Section = styled.div``;

const SectionTitle = styled.p`
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #556573;
`;

const SectionText = styled.p``;

const EventDetails = ({ match }) => {
  const [eventList, setEventList] = useContext(EventContext);
  /* eslint-disable */
  const [clientList, setClientList] = useContext(ClientContext);
  const [userList, setUserList] = useContext(UserContext);
  /* eslint-enable */
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [assignment, setAssignment] = useState({
    client: "",
    assigned_to: "",
  });

  // ? set state for page based on event id
  useEffect(() => {
    const findEvent = eventList.find((event) => event.id === match.params.id);
    setEvent(findEvent);
    setIsLoading(false);
  }, [match.params.id, eventList]);

  // ? update assignments
  useEffect(() => {
    let client = clientList.find((client) => client.id === event.client);
    if (client) {
      setAssignment((assignment) => ({
        ...assignment,
        client: client.client,
      }));
    }
    let user = userList.find((user) => user.user_data.id === event.assigned_to);

    if (user) {
      setAssignment((assignment) => ({
        ...assignment,
        assigned_to: user.personal_data.name,
      }));
    }
  }, [clientList, userList, event.client, event.assigned_to]);

  // ? convert date
  const dateToStr = (date) => {
    let dateStr = new Date(date);
    return dateStr;
  };

  // ? toggle task complete
  const toggleComplete = () => {
    const eventIndex = eventList.findIndex(
      (event) => event.id === match.params.id
    );
    let list = [...eventList];
    let event = { ...list[eventIndex] };
    event.complete = !event.complete;
    list[eventIndex] = event;
    setEventList(list);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <PriorityTag
            level={event.priority}
            style={{ padding: ".5rem 0", marginBottom: ".5rem" }}
          />
          <Title>{event.title}</Title>
          <Section>
            <SectionTitle>Date:</SectionTitle>
            <SectionText>
              {utcDateToDateString(dateToStr(event.date.start))}
            </SectionText>
          </Section>
          <Section>
            <SectionTitle>Time:</SectionTitle>
            {event.date.all_day ? (
              <SectionText>All Day</SectionText>
            ) : (
              <>
                <SectionText>
                  {`${utcDateToTimeString(
                    dateToStr(event.date.start)
                  )}-${utcDateToTimeString(dateToStr(event.date.end))}`}
                </SectionText>
              </>
            )}
          </Section>
          <Section>
            <SectionTitle>Description</SectionTitle>
            <SectionText>{event.description}</SectionText>
          </Section>
          <Section>
            <SectionTitle>Client</SectionTitle>
            <SectionText>{assignment.client}</SectionText>
          </Section>
          <Section>
            <SectionTitle>Assigned To</SectionTitle>
            <SectionText>{assignment.assigned_to}</SectionText>
          </Section>
          <Button
            confirm={event.complete}
            onClick={toggleComplete}
            style={{ margin: "1rem 0" }}
          >
            {event.complete ? "Mark As Incomplete" : "Mark As Complete"}
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default EventDetails;
