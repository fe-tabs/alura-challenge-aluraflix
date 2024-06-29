import styled from "styled-components";
import TagName from "./TagName";

const TagContainer = styled.div``;

const TagVideos = styled.div`
  margin: 2rem 0 6rem;
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
      <TagName backgroundColor={backgroundColor}>
        {name}
      </TagName>

      <TagVideos>
        {children}
      </TagVideos>
    </TagContainer>
  );
}