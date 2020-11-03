import styled from "styled-components";

// *** components
import Title from "../_atoms/Title";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem 0;
`;

const Welcome = (props) => {
  return (
    <Wrapper>
      <Title h={2} center>
        Welcome {props.name}
      </Title>
    </Wrapper>
  );
};

export default Welcome;
