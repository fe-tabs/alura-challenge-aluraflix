import styled from "styled-components";
import logo from '/images/logo.svg';
import HeaderLink from "./HeaderLink";

const HeaderContainer = styled.header`
  background-color: var(--black);
  font-size: 2rem;
  padding: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px){
    justify-content: center;
  }
`;

const HeaderLogo = styled.img`
  height: 4rem;
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 2.4rem;

  @media (max-width: 768px){
    display: none;
  }
`;

export default function Header() {
  return(
    <HeaderContainer>
      <HeaderLogo src={logo} alt="AluraFlix"/>

      <HeaderNav>
        <HeaderLink isActive={true}>INÍCIO</HeaderLink>
        <HeaderLink>NOVO VÍDEO</HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
}