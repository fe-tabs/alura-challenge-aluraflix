import { useEffect, useState } from "react";
import Tag from "../../components/Tag";
import Video from "../../components/Video";
import styled from "styled-components";
import Banner from "../../components/Banner";

const MainContainer = styled.main``;

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

  let bannerVideo;
  let bannerTag;

  if (videos.length >= 1) {
    bannerVideo = videos[Math.floor(Math.random() * videos.length - 1)];
    bannerTag = tags.find(tag => tag.id === bannerVideo.tagId);
  }

  return(
    <MainContainer>
      {videos.length >= 1 && 
        <Banner tag={bannerTag} video={bannerVideo}/>
      }

      <HomeContainer>
        {tags.map(tag => (
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
        ))}
      </HomeContainer>
    </MainContainer>
  );
}