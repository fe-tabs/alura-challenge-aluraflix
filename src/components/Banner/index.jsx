import styled from "styled-components";
import TagName from "../Tag/TagName";
import { useVideosContext } from "../../contexts/VideosContext";

const BannerContainer = styled.div`
  height: 60rem;
  width: 100%;
  position: relative;

  & > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    border: none;
    z-index: -2;
  }
  
  div.overlay {
    background-color: var(--black);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    height: 56rem;
  }
`;

const BannerVideoCard = styled.div`
  position: absolute;
  top: 14rem;
  padding: 2rem 4rem;
  display: flex;
  gap: 2.4rem;

  iframe {
    height: 36.4rem;
    flex: 50%;
    border: none;
    border-radius: .6rem;
    box-shadow: 0 0 .8rem .2rem ${props => props.$color};
  }

  @media (max-width: 1024px) {
    top: 8rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    height: 100%;
    top: 4rem;
    flex-direction: column;
    justify-content: center;

    iframe {
      width: calc(100vw - 12rem);
      flex: 35%;
      order: 1;
    }
  }
`;

const BannerVideoDescription = styled.div`
  flex: 50%;
  display: flex;
  justify-content: end;
  flex-direction: column;

  h4 {
    font-size: 4.4rem;
    margin-bottom: 2.4rem;
  }

  p {
    font-size: 2rem;
    font-weight: lighter;
    text-overflow: ellipsis;
  }

  @media (max-width: 1024px) {
    justify-content: start;

    h4 {
      font-size: 3.2rem;
      margin-bottom: 1.2rem
    }
  }

  @media (max-width: 768px) {
    order: 2;

    h4 {
      max-height: 6.4rem;
      font-size: 2.8rem;
      overflow: hidden;
    }

    p {
      max-height: 9.2rem;
      margin-bottom: 2rem;
      overflow: hidden;
    }

    & > div {
      height: 6rem;
      max-width: 30rem;
      font-size: 2.4rem;
      order: 3;
    }
  }
`;

export default function Banner() {
  const { tags, videos } = useVideosContext();

  const video = videos[0];
  const tag = tags.find(tag => tag.id === video.tagId);

  return(
    <BannerContainer>
      <div className="overlay"></div>
      <iframe src={video.url} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <BannerVideoCard $color={tag.color}>
        <BannerVideoDescription>
          <TagName backgroundColor={tag.color}>{tag.name}</TagName>
          <h4>{video.title}</h4>
          <p>{video.description}</p>
        </BannerVideoDescription>
        
          <iframe src={video.url} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </BannerVideoCard>
    </BannerContainer>
  );
}