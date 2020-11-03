import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
// import ClientCard from "../components/_atoms/ClientCard";
// import ClientCardList from "../components/_organisms/ClientCardList";

const ClientList = () => {
  const [clientList, setClientList] = useContext(ClientContext);

  return <h1>Clients</h1>;
  // <ClientCardList>
  //   {clientList.map((client) => (
  //     <ClientCard key={client.id} data={client} />
  //   ))}
  // </ClientCardList>
};

export default ClientList;
