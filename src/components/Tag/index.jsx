import styled from "styled-components";

const TagContainer = styled.div`
  margin-bottom: 9.2rem;
`;

const TagName = styled.div`
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

const TagVideos = styled.div`
  padding-bottom: 2rem;
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    background: rgba(34, 113, 209, .15);
    border-radius: 1rem;
  }
  
  &::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 1rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #2271D1;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #2271D1;
  }
`;

export default function Tag({
  backgroundColor,
  name,
  children
}) {
  return(
    <TagContainer>
      <TagName style={{ backgroundColor: backgroundColor }}>
        <h3>{name}</h3>
      </TagName>

      <TagVideos>
        {children}
      </TagVideos>
    </TagContainer>
  );
}