import styled from "styled-components";
import { useState, useContext, useEffect, useReducer } from "react";
import { clientState, clientReducer } from "../../reducers/NewClientReducer";
import { ClientContext } from "../../context/clientContext";

import ClientDetailsForm from "../_organisms/ClientDetailsForms";
import Button from "../_atoms/Button";
import Modal from "../_molecules/Modal";

const Wrapper = styled.form`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  row-gap: 0.5rem;
  background: #ccc;
`;

const NewClientForm = () => {
  const [clientList, setClientList] = useContext(ClientContext);
  const [state, dispatch] = useReducer(clientReducer, clientState);
  const [submitModal, setSubmitModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  // * * * generates uuid on load * * *
  useEffect(() => {
    dispatch({ type: "UPDATE_ID" });
  }, []);

  // * * * handle input in input fields * * *
  const handleChange = (e) => {
    dispatch({
      type: "INPUT",
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  // * * * handles final confirm of details * * *
  const handleSubmit = (e) => {
    e.preventDefault();
    setClientList([...clientList, state.client]);
    dispatch({ type: "RESET" });
    setSubmitModal(false);
  };

  // * * * handle decline of correct details * * *
  const handleDecline = (e) => {
    e.preventDefault();
    setSubmitModal(false);
  };

  // * * * opens final prompt to submit * * *
  // opens modal on submit
  const handlePrompt = (e) => {
    e.preventDefault();
    setSubmitModal(true);
  };

  // * * * opens prompt to visit client profile * * *
  const submitSuccess = (arr, id) => {
    let success = arr.find((client) => client.id === id);
    if (success !== undefined) setSuccessModal(true);
  };

  useEffect(() => {
    submitSuccess(clientList, state.currentId);
  }, [clientList, state.currentId]);

  return (
    <>
      <Wrapper>
        <ClientDetailsForm
          id={state.client.id}
          date_added={state.client.date_added}
          client={state.client.client}
          type={state.client.type}
          contact={state.client.contact}
          phone={state.client.phone}
          mobile={state.client.mobile}
          email={state.client.email}
          house_no={state.client.house_no}
          postcode={state.client.postcode}
          onChange={handleChange}
        />
        <Button confirm onClick={handlePrompt}>
          Add Client
        </Button>
      </Wrapper>
      <Modal
        text="Are you sure all information is correct?"
        confirm="Yes"
        decline="No"
        onConfirm={handleSubmit}
        onDecline={handleDecline}
        reveal={submitModal}
      />
      <Modal
        text="Client created successfully!"
        confirm="Client Profile"
        decline="Finished"
        confirmLink={`/clients/${state.currentId}`}
        declineLink="/"
        reveal={successModal}
      />
    </>
  );
};

export default NewClientForm;
