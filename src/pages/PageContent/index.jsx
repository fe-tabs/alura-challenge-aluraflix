import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import { VideosProvider } from "../../contexts/VideosContext";

const BodyContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const MainContainer = styled.main`
  @media (max-width: 768px){
    padding-bottom: 11rem;
  }
`;

export default function PageContent() {
  return(
    <BodyContainer>
      <Header/>

      <MainContainer>
        <VideosProvider>
          <Outlet/>
        </VideosProvider>
      </MainContainer>

      <Footer/>
    </BodyContainer>
  );
}