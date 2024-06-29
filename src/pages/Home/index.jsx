import { useEffect, useState } from "react";
import Tag from "../../components/Tag";
import Video from "../../components/Video";
import styled from "styled-components";

const HomeContainer = styled.section`
  padding: 2rem 4rem;
`;

export default function Home() {
  const [tags, setTags] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tags')
      .then(res => res.json())
      .then(data => setTags(data));
    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  return(
    <HomeContainer>
      {tags.map(tag => (
        <>
          <Tag 
            key={tag.id} 
            backgroundColor={tag.color}
            name={tag.name}
          >
            {videos.filter(video => video.tagId === tag.id).map(video => (
              <Video
                key={video.id}
                title={video.title}
                url={video.url}
                color={tag.color}
              />
            ))}
          </Tag>
        </>
      ))}
    </HomeContainer>
  );
}