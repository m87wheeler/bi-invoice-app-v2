import { Link } from "react-router-dom";
import styled from "styled-components";
import StatusDot from "./StatusDot";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  background: #566573;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const DetailsLink = styled(Link)`
  grid-column: 1 / span 2;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "title type"
    "postcode .";
  color: #eee;
  text-decoration: none;
`;

const Title = styled.h3`
  grid-area: title;
  justify-self: flex-start;
  text-decoration: none;
`;

const Postcode = styled.p`
  grid-area: postcode;
  justify-self: flex-start;
  text-decoration: none;
`;

const Type = styled.p`
  grid-area: type;
  justify-self: flex-end;
  align-self: center;
  padding: 0.25rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-decoration: none;
  text-transform: uppercase;
  background: #eee;
  color: #111;
`;

const Anchor = styled.a`
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: #788795;
  color: #eee;
  text-decoration: none;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

const ClientCard = (props) => {
  const client = props.data;

  return (
    <Wrapper>
      <DetailsLink to={`/clients/${client.id}`} key={client.id}>
        <Title>{client.client}</Title>
        <Postcode>{client.postcode}</Postcode>
        <Type>{client.type}</Type>
        {client.active ? <StatusDot active /> : <StatusDot />}
      </DetailsLink>
      <Anchor href={`tel:${client.phone}`}>Phone</Anchor>
      <Anchor href={`mailto:${client.email}`}>Email</Anchor>
    </Wrapper>
  );
};

export default ClientCard;
