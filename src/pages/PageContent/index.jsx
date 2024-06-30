import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";

const BodyContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const MainContainer = styled.main`
  padding-bottom: 11rem;
`;

export default function PageContent() {
  return(
    <BodyContainer>
      <Header/>

      <MainContainer>
        <Outlet/>
      </MainContainer>

      <Footer/>
    </BodyContainer>
  );
}