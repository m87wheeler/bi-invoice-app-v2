import styled from "styled-components";
import NewClientCreation from "../components/_organisms/NewClientCreation";

const Wrapper = styled.div``;

const NewClient = (props) => {
  return (
    <Wrapper>
      <NewClientCreation />
    </Wrapper>
  );
};

export default NewClient;
