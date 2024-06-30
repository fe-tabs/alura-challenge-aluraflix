import styled from "styled-components";
import logo from '/images/logo.svg';
import FooterLink from "./FooterLink";

const FooterContainer = styled.footer`
  background-color: var(--black);
  font-size: 2rem;
  padding: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-color: #0E0E0E;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const FooterLogo = styled.img`
  height: 4rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 2.4rem;
  }
`;

export default function Footer() {
  return(
    <FooterContainer>
      <FooterLogo src={logo} alt="AluraFlix"/>

      <FooterNav>
        <FooterLink
          imageInactive="/icons/home.png"
          imageActive="/icons/home-active.png"
          imageClass="homeIcon"
          url="/"
          text="ÍNICIO"
        />

        <FooterLink
          imageInactive="/icons/new.png"
          imageActive="/icons/new-active.png"
          url="/new"
          text="NOVO VÍDEO"
        />
      </FooterNav>
    </FooterContainer>
  );
}