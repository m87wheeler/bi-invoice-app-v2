import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const MessagingContext = createContext();

export const MessagingProvider = ({ children }) => {
  const [messageThread, setMessageThread] = useState([
    {
      id: uuidv4(),
      date: "Tue Nov 03 2020 07:02:53 GMT+0000 (Greenwich Mean Time)",
      thread: [
        {
          id: uuidv4(),
          user: "system_01",
          name: "System",
          date: "Tue Nov 03 2020 07:02:53 GMT+0000 (Greenwich Mean Time)",
          message: "Welcome To Blue Interiors messaging.",
        },
        {
          id: uuidv4(),
          user: "6a74f217-a94d-4ad6-a23b-9a67dabb3cd9",
          name: "Martin Wheeler",
          date: "Tue Nov 03 2020 10:32:45 GMT+0000 (Greenwich Mean Time)",
          message:
            "Ipsum occaecat eu anim do. Dolore esse aliqua proident quis ut dolor nisi ad eiusmod eiusmod.",
        },
        {
          id: uuidv4(),
          user: "1d737f98-5ce0-489e-9ff9-7cf0095abfe5",
          name: "Agne Bickaite",
          date: "Tue Nov 03 2020 10:45:45 GMT+0000 (Greenwich Mean Time)",
          message:
            "Aliqua voluptate tempor dolore tempor nulla sit et. Est consequat qui deserunt do ut aute magna.",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "Wed Nov 04 2020 11:00:45 GMT+0000 (Greenwich Mean Time)",
      thread: [
        {
          id: uuidv4(),
          user: "6a74f217-a94d-4ad6-a23b-9a67dabb3cd9",
          name: "Martin Wheeler",
          date: "Wed Nov 04 2020 11:00:45 GMT+0000 (Greenwich Mean Time)",
          message:
            "Eiusmod excepteur in sint deserunt nisi elit aute pariatur aliqua do consectetur velit officia. Anim ut in incididunt ut deserunt.",
        },
        {
          id: uuidv4(),
          user: "74hndh37-s9h2-872j-0dv0-8jdh633hs9i8",
          name: "Bob Mortimer",
          date: "Wed Nov 04 2020 12:57:45 GMT+0000 (Greenwich Mean Time)",
          message:
            "Et sunt esse ad ad adipisicing ullamco adipisicing occaecat. Veniam irure quis consectetur tempor voluptate elit tempor.",
        },
      ],
    },
  ]);

  return (
    <MessagingContext.Provider value={[messageThread, setMessageThread]}>
      {children}
    </MessagingContext.Provider>
  );
};
