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
          isActive={true}
          imageInactive="/icons/home.png"
          imageActive="/icons/home-active.png"
          imageClass="homeIcon"
          text="ÍNICIO"
        />

        <FooterLink
          imageInactive="/icons/new.png"
          imageActive="/icons/new-active.png"
          text="NOVO VÍDEO"
        />
      </FooterNav>
    </FooterContainer>
  );
}