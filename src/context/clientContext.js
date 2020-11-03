// ? Client data
import { createContext, useState } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clientList, setClientList] = useState([
    {
      id: "2656h3-bdbd83-7s33bd",
      client: "Spongebob Squarepants",
      type: "private",
      contact: "Brian The Snail",
      phone: "309764696",
      mobile: "",
      email: "spongebob@pineapple.com",
      house_no: "113",
      active: true,
      postcode: "BB12 7AJ",
      date_added: new Date(),
    },
  ]);

  return (
    <ClientContext.Provider value={[clientList, setClientList]}>
      {children}
    </ClientContext.Provider>
  );
};
