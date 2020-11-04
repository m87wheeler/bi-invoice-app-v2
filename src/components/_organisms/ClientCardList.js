import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  row-gap: 0.5rem;
  padding: 1rem 0;
`;

const ClientCardList = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default ClientCardList;
