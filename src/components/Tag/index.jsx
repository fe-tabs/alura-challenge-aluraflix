import styled from "styled-components";

const TagContainer = styled.div`
  color: var(--gray-light);
  height: 7rem;
  width: 43.2rem;
  font-size: 3.2rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 1.2rem;
  border: .2rem solid #000;
  border-radius: 1.6rem;
`;

export default function Tag({ backgroundColor, children }) {
  return(
    <TagContainer style={{ backgroundColor: backgroundColor }}>
      <h3>{children}</h3>
    </TagContainer>
  );
}