import { useState } from "react";
import styled from "styled-components";

import london from "../../assets/images/map-london.png";

import Input from "../_atoms/Input";
import Select from "../_atoms/Select";
import Button from "../_atoms/Button";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  row-gap: 0.5rem;
`;

const AddressDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: ${(props) => (props.active ? "1000px" : "0px")};
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const ClientList = (props) => {
  const [revealMap, setRevealMap] = useState(false);

  // * * * uses reverse geoloacting & maps * * *
  // TODO: will handle GoogleMap for client
  const handleFindAddress = (e) => {
    e.preventDefault();
    setRevealMap(true);
    alert(`Find ${props.house_no} ${props.postcode}`);
  };

  return (
    <Wrapper>
      <Input
        value={props.client}
        label="Client Name"
        name="client"
        type="text"
        required
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <Select
        value={props.type}
        label="Client Type"
        name="type"
        options={[
          { text: "Private", value: "private" },
          { text: "Business", value: "business" },
          { text: "Other", value: "other" },
        ]}
        defaultValue="private"
        required
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <Input
        value={props.contact}
        label="Primary Contact"
        name="contact"
        type="text"
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <Input
        value={props.phone}
        label="Phone"
        name="phone"
        type="tel"
        required
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <Input
        value={props.mobile}
        label="Mobile"
        name="mobile"
        type="tel"
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <Input
        value={props.email}
        label="Email"
        name="email"
        type="email"
        required
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <AddressDetails>
        <Input
          value={props.house_no}
          label="House / Building No."
          name="house_no"
          type="text"
          onChange={props.onChange}
          disabled={props.disabled}
        />
        <Input
          value={props.postcode}
          label="Postcode"
          name="postcode"
          type="text"
          required
          onChange={props.onChange}
          disabled={props.disabled}
        />
      </AddressDetails>
      <Button onClick={handleFindAddress} disabled={props.disabled}>
        Find Address
      </Button>
      <MapContainer active={revealMap}>
        <img src={london} alt="map" />
      </MapContainer>
      <Input value={props.id} label="Client ID" disabled />
      <Input value={props.date_added} label="Date Added" disabled />
    </Wrapper>
  );
};

export default ClientList;
