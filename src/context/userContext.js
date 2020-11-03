// ? App user data
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([
    {
      personal_data: {
        name: "Martin Wheeler",
        phone: "01234 567 890",
        email: "user1@username.com",
      },
      client_list: [],
      works_data: [],
      user_data: {
        id: uuidv4(),
        username: "m87wheeler",
        password: "password",
      },
    },
    {
      personal_data: {
        name: "Agne Bickaite",
        phone: "09876 543 210",
        email: "user2@username.com",
      },
      client_list: [],
      works_data: [],
      user_data: {
        id: uuidv4(),
        username: "agynnes",
        password: "password",
      },
    },
  ]);

  console.log(userList);

  return (
    <UserContext.Provider value={[userList, setUserList]}>
      {children}
    </UserContext.Provider>
  );
};
