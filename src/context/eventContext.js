// ? Calendar event data
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventList, setEventList] = useState([
    {
      id: uuidv4(),
      title: "Home Visit @ Cambridge",
      date: {
        all_day: false,
        start: "2020-11-17T09:30:00.000Z",
        end: "2020-11-17T10:45:00.000Z",
      },
      description: "Meet with client",
      category: "home_visit",
      priority: "regular",
      creation: {
        author: "",
        date: new Date(),
      },
      assigned_to: "1d737f98-5ce0-489e-9ff9-7cf0095abfe5",
      complete: false,
      client: "2656h3-bdbd83-7s33bd",
    },
    {
      id: uuidv4(),
      title: "Home Visit @ Maldon",
      date: {
        all_day: false,
        start: "2020-12-21T09:30:00.000Z",
        end: "2020-12-21T10:45:00.000Z",
      },
      description: "Meet with client",
      category: "home_visit",
      priority: "low",
      creation: {
        author: "",
        date: new Date(),
      },
      assigned_to: "none",
      complete: false,
      client: "2656h3-bdbd83-7s33bd",
    },
    {
      id: uuidv4(),
      title: "Contact client regarding payment",
      date: {
        all_day: true,
        start: "2020-06-17T09:30:00.000Z",
        end: "2020-06-17T10:45:00.000Z",
      },
      description: "",
      category: "contact",
      priority: "high",
      creation: {
        author: "",
        date: new Date(),
      },
      assigned_to: "1d737f98-5ce0-489e-9ff9-7cf0095abfe5",
      complete: false,
      client: "2656h3-bdbd83-7s33bd",
    },
  ]);

  return (
    <EventContext.Provider value={[eventList, setEventList]}>
      {children}
    </EventContext.Provider>
  );
};
