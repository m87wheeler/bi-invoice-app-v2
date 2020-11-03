// ? App user data
import { createContext, useState } from "react";

export const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState({
    logged_in: false,
    logged_id: "",
    logged_name: "",
    session_id: "",
    session_start: "",
  });

  return (
    <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      {children}
    </LoggedInContext.Provider>
  );
};
