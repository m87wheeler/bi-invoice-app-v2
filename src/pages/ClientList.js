import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import styled from "styled-components";

// *** components
import ClientCard from "../components/_atoms/ClientCard";
import ClientCardList from "../components/_organisms/ClientCardList";
import Button from "../components/_atoms/Button";

// ***
const Wrapper = styled.div`
  padding: 1rem;
`;

const StyledButton = styled(Button)`
  position: sticky;
  top: 0;
  left: 0;
`;

const ClientList = () => {
  //eslint-disable-next-line
  const [clientList, setClientList] = useContext(ClientContext);

  return (
    <Wrapper>
      <StyledButton link="/newclient" confirm>
        Add Client
      </StyledButton>
      <ClientCardList>
        {clientList.map((client) => (
          <ClientCard key={client.id} data={client} />
        ))}
      </ClientCardList>
    </Wrapper>
  );
};

export default ClientList;
