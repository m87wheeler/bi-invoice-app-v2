import { useState, useEffect } from "react";
import styled from "styled-components";

// *** data & hooks
import {
  generateDateArr,
  generateDefaultDate,
} from "../../assets/functions/functions";

// *** components
import Button from "../_atoms/Button";
import Input from "../_atoms/Input";
import Select from "../_atoms/Select";

// *** styled components
const TimeSelect = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
  align-items: flex-end;
  background: #eee;
`;

const DateSelect = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 0.25rem;
  background: #eee;
`;

const StyledButton = styled(Button)`
  grid-column: 1 / span 2;
`;

const NewEventForm = (props) => {
  const [userList, setUserList] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [dateArrays, setDateArrays] = useState({
    month: generateDateArr("month"),
    year: generateDateArr("year"),
    date: generateDateArr("date"),
  });
  const [dateValues, setDateValues] = useState({
    month: generateDefaultDate("month"),
    year: generateDefaultDate("year"),
    date: generateDefaultDate("date"),
  });
  const [timeValues, setTimeValues] = useState({
    start_h: "",
    start_m: "",
    end_h: "",
    end_m: "",
  });
  const [timeString, setTimeString] = useState({
    start: "",
    end: "",
  });

  // ? generate date list from month and year
  const handleDateChange = (e) => {
    setDateValues({
      ...dateValues,
      [e.target.name]: e.target.value,
    });
  };

  // ? update dateArrays.date on month and year change
  useEffect(() => {
    setDateArrays((dateArrays) => ({
      ...dateArrays,
      date: generateDateArr("date", dateValues.month, dateValues.year),
    }));
  }, [dateValues.month, dateValues.year]);

  // ? generate user and client list from props data
  const generateUserList = (arr) => {
    let listArr = arr.map((user) => {
      return { text: user.personal_data.name, value: user.user_data.id };
    });
    return listArr;
  };
  const generateClientList = (arr) => {
    let listArr = arr.map((client) => {
      return { text: client.client, value: client.id };
    });
    return listArr;
  };
  useEffect(() => {
    setUserList(generateUserList(props.users));
    setClientList(generateClientList(props.clients));
  }, [props.clients, props.users]);

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
    <>
      <Input
        label="Event Title"
        name="title"
        required
        value={props.state.title}
        onChange={props.onChange}
      />
      <DateSelect>
        <Select
          label="Month"
          onChange={handleDateChange}
          name="month"
          options={dateArrays.month}
          required
          defaultValue={dateValues.month}
        />
        <Select
          label="Year"
          onChange={handleDateChange}
          name="year"
          options={dateArrays.year}
          required
          defaultValue={dateValues.year}
        />
        <Select
          key={Math.random()} // causing re-render to set default - ?
          label="Date"
          onChange={handleDateChange}
          name="date"
          options={dateArrays.date}
          required
          defaultValue={dateValues.date}
          style={{ gridColumn: "1 / span 2" }}
        />
      </DateSelect>
      <TimeSelect>
        <Select
          label="Event Start"
          onChange={props.onChange}
          name="start_h"
          options={hours}
          required={!props.state.all_day}
          disabled={props.state.all_day}
          defaultValue={props.state.start_h}
        />
        <Select
          onChange={props.onChange}
          name="start_m"
          options={minutes}
          required={!props.state.all_day}
          disabled={props.state.all_day}
          defaultValue={props.state.start_m}
        />
        <Select
          label="Event End"
          onChange={props.onChange}
          name="end_h"
          options={hours}
          required={!props.state.all_day}
          disabled={props.state.all_day}
          defaultValue={props.state.end_h}
        />
        <Select
          onChange={props.onChange}
          name="end_m"
          options={minutes}
          required={!props.state.all_day}
          disabled={props.state.all_day}
          defaultValue={props.state.end_m}
        />
        <StyledButton
          onClick={props.onClick}
          onChange={props.onChange}
          name="all_day"
          value={props.state.all_day}
        >
          {!props.state.all_day ? "All Day" : "Choose Times"}
        </StyledButton>
      </TimeSelect>
      <Input
        label="Event Description"
        name="description"
        type="textarea"
        value={props.state.description}
        onChange={props.onChange}
      />
      <Select
        label="Category"
        onChange={props.onChange}
        name="category"
        options={[
          { text: "Home Visit", value: "home_visit" },
          { text: "Deadline", value: "deadline" },
          { text: "Contact", value: "contact" },
          { text: "Online Consultation", value: "online_consultation" },
          { text: "Other", value: "other" },
        ]}
        defaultValue={props.state.category}
      />
      <Select
        label="Priority"
        onChange={props.onChange}
        name="priority"
        options={[
          { text: "High", value: "high" },
          { text: "Regular", value: "regular" },
          { text: "Low", value: "low" },
        ]}
        defaultValue={props.state.priority}
      />
      <Select
        label="Assigned To"
        onChange={props.onChange}
        name="assigned_to"
        options={[{ text: "None", value: "none" }, ...userList]}
        defaultValue={props.state.assigned_to}
      />
      <Select
        label="Client"
        onChange={props.onChange}
        name="client"
        options={[{ text: "None", value: "none" }, ...clientList]}
        defaultValue={props.state.client}
      />
      <Button confirm onClick={props.onSubmit}>
        Create Event
      </Button>
    </>
  );
};

export default NewEventForm;
