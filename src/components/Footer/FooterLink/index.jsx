import styled from "styled-components";

const FooterLinkContainer = styled.div`
  color: var(--gray-light);
  height: 5.4rem;
  font-family: var(--secondary-font-family);
  font-weight: bold;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 5rem;

  span {
    display: none;
  }

  img {
    height: 4.5rem;
    width: 4.5rem;
    
    &.homeIcon{
      height: 5.8rem;
      width: 5.8rem;
    }
  } 

  &.active {
    background-color: rgba(34, 113, 209, .24);
    color: var(--blue);
    border: .1rem solid var(--blue);

    span {
      display: inline;
    }

    img {
      height: 3rem;
      width: 3rem;

      &.homeIcon {
        height: 4.2rem;
        width: 4.2rem;
      }
    }
  }
`;

export default function FooterLink({
  isActive = false, 
  imageActive, 
  imageInactive, 
  imageClass = '',
  text
}) {
  return(
    <FooterLinkContainer className={isActive && 'active'}>
      <img
        className={imageClass}
        src={isActive ? imageActive : imageInactive} 
        alt={text}
      />
      <span>{text}</span>
    </FooterLinkContainer>
  );
}