import { useContext, useState, useEffect, useReducer } from "react";
import { ClientContext } from "../context/clientContext";
import { clientState, clientReducer } from "../reducers/NewClientReducer";
import styled from "styled-components";

import ClientDetailsForm from "../components/_organisms/ClientDetailsForms";
import Button from "../components/_atoms/Button";
import StatusDot from "../components/_atoms/StatusDot";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  padding-bottom: 1rem;
`;

const FormWrapper = styled.div`
  padding-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  row-gap: 0.5rem;
`;

const ClientProfile = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [clientList, setClientList] = useContext(ClientContext);
  const [disabled, setDisabled] = useState(true);
  const [state, dispatch] = useReducer(clientReducer, clientState);
  const {
    id,
    date_added,
    client,
    type,
    contact,
    phone,
    mobile,
    email,
    house_no,
    postcode,
    active,
  } = state.client;
  const [index, setIndex] = useState(null);

  // * * * populate details from matching client in clientList * * *
  useEffect(() => {
    const findClient = clientList.find(
      (client) => client.id === match.params.id
    );
    dispatch({ type: "COMPLETE", payload: findClient });
    const clientIndex = clientList.findIndex(
      (client) => client.id === match.params.id
    );
    setIndex(clientIndex);
    setIsLoading(false);
  }, [clientList, match.params.id]);

  // * * * submit changes to context * * *
  const handleSubmit = () => {
    let list = [...clientList];
    let client = list[index];
    let updated = state.client;
    client = updated;
    list[index] = client;
    setClientList(list);
  };

  // * * * toggle edit functionality for inputs * * *
  const toggleDisabled = () => {
    if (disabled) {
      setDisabled(false);
    } else {
      handleSubmit();
      setDisabled(true);
    }
  };

  // * * * handle input from input elements * * *
  const handleChange = (e) => {
    dispatch({
      type: "INPUT",
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  return (
    <Wrapper>
      <Header>
        {isLoading ? null : (
          <>
            <h2>{client}</h2>
            <StatusDot active={active} />
          </>
        )}
      </Header>
      <FormWrapper>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ClientDetailsForm
            id={id}
            date_added={date_added}
            client={client}
            type={type}
            contact={contact}
            phone={phone}
            mobile={mobile}
            email={email}
            house_no={house_no}
            postcode={postcode}
            onChange={handleChange}
            disabled={disabled}
          />
        )}
      </FormWrapper>
      <ButtonGroup>
        <Button onClick={toggleDisabled} danger={disabled} confirm={!disabled}>
          {disabled ? "Edit Details" : "Save Changes"}
        </Button>
        <Button link={`clients/${id}/works`}>Client Works</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default ClientProfile;
