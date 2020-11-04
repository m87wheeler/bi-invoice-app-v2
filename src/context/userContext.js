// ? App user data
import { createContext, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

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
        id: "6a74f217-a94d-4ad6-a23b-9a67dabb3cd9",
        username: "m87wheeler",
        password: "password",
      },
      privileges: {
        edit_user: false,
        edit_client: false,
        edit_event: false,
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
        id: "1d737f98-5ce0-489e-9ff9-7cf0095abfe5",
        username: "agynnes",
        password: "password",
      },
      privileges: {
        edit_user: true,
        edit_client: true,
        edit_event: true,
      },
    },
  ]);

  return (
    <UserContext.Provider value={[userList, setUserList]}>
      {children}
    </UserContext.Provider>
  );
};
