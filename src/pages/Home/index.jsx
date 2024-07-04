import Tag from "../../components/Tag";
import Video from "../../components/Video";
import styled from "styled-components";
import Banner from "../../components/Banner";
import { useVideosContext } from "../../contexts/VideosContext";
import Modal from "../../components/Modal";

const HomeContainer = styled.section`
  padding: 2rem 4rem;
`;

export default function Home() {
  const { tags, videos, selectedVideo } = useVideosContext();

  return(
    <>
    {videos.length >= 1 && <Banner/>}

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
                video={video}
                color={tag.color}
              />
            ))}
          </Tag>
        ))}
      </HomeContainer>

      {selectedVideo && <Modal selectedVideo={selectedVideo}/>}
    </>
  );
}