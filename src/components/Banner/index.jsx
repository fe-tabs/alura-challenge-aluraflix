import styled from "styled-components";
import TagName from "../Tag/TagName";

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
`;

const BannerVideoCard = styled.div`
  position: relative;
  top: 16rem;
  padding: 2rem;
  display: flex;
  gap: 2.4rem;

  iframe {
    height: 36.4rem;
    flex: 50%;
    border: none;
    border-radius: .6rem;
    box-shadow: 0 0 .8rem .2rem ${props => props.$color};
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
  }
`;

export default function Banner({ video, tag }) {
  const { title, url, description } = video;

  return(
    <BannerContainer>
      <div className="overlay"></div>
      <iframe src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <BannerVideoCard $color={tag.color}>
        <BannerVideoDescription>
          <TagName backgroundColor={tag.color}>{tag.name}</TagName>
          <h4>{title}</h4>
          <p>{description}</p>
        </BannerVideoDescription>
          <iframe src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </BannerVideoCard>
    </BannerContainer>
  );
}