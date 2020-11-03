import styled from "styled-components";
import Header from "../_views/Header";
import Footer from "../_views/Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
