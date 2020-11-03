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
      assigned_to: "none",
      complete: false,
      client: "none",
    },
  ]);

  return (
    <EventContext.Provider value={[eventList, setEventList]}>
      {children}
    </EventContext.Provider>
  );
};
