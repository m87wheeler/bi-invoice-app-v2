import { useState, useEffect } from "react";

// *** data and hooks
import {
  handleChange,
  generateDefaultDate,
} from "../../assets/functions/functions";

// *** components
import Button from "../_atoms/Button";
import Input from "../_atoms/Input";
import Select from "../_atoms/Select";
import DateSelect from "../_molecules/DateSelect";
import TimeSelect from "../_molecules/TimeSelect";

const NewEventForm = (props) => {
  const [userList, setUserList] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [dateValues, setDateValues] = useState({
    year: generateDefaultDate("year"),
    month: generateDefaultDate("month"),
    date: generateDefaultDate("date"),
    all_day: false,
    start_h: "9",
    start_m: "00",
    end_h: "10",
    end_m: "00",
  });

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

  const handleAllDay = () =>
    setDateValues({
      ...dateValues,
      all_day: !dateValues.all_day,
    });
  const handleReset = () => {
    setDateValues({
      ...dateValues,
      year: generateDefaultDate("year"),
      month: generateDefaultDate("month"),
      date: generateDefaultDate("date"),
    });
  };

  return (
    <>
      <Input
        label="Event Title"
        name="title"
        required
        value={props.state.title}
        onChange={props.onChange}
      />
      <DateSelect
        onChange={(e) => setDateValues(handleChange(e, dateValues))}
        onClick={handleReset}
        defaultMonth={generateDefaultDate("month")}
        defaultYear={generateDefaultDate("year")}
        defaultDate={generateDefaultDate("date")}
        monthValue={dateValues.month}
        yearValue={dateValues.year}
      />
      <TimeSelect
        onChange={(e) => setDateValues(handleChange(e, dateValues))}
        onClick={handleAllDay}
        allDay={dateValues.all_day}
      />
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
      <Button onClick={() => props.onSubmit(dateValues)} confirm>
        Create Event
      </Button>
    </>
  );
};

export default NewEventForm;
