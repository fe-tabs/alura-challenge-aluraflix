import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderLinkContainer = styled.div`
  a {
    background-color: var(--black);
    color: var(--gray-light);
    height: 5.4rem;
    width: 18rem;
    font-family: var(--secondary-font-family);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: .1rem solid var(--gray-light);
    border-radius: 1.2rem;

    &.active {
      color: var(--blue);
      border: none;
      box-shadow: 0 0 1rem .4rem inset var(--blue);
    }
  }
`;

export default function HeaderLink({ url, children }) {
  const currentUrl = useLocation();
  const isActive = url === currentUrl.pathname;

  return(
    <HeaderLinkContainer>
      <Link to={url} className={isActive ? 'active': ''}>
        {children}
      </Link>
    </HeaderLinkContainer>
  );
}