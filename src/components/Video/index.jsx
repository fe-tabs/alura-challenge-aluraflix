import styled from "styled-components";
import { useVideosContext } from "../../contexts/VideosContext";

const VideoContainer = styled.div`
  background-color: var(--black);
  height: 32rem;
  border: .4rem solid ${props => props.$color};
  border-radius: .6rem .6rem 1rem 1rem;
  box-shadow: 0 -.6rem 1.2rem -.3rem inset ${props => props.$color};
`;

const VideoPlayer = styled.div`
  iframe {
    height: 26rem;
    width: 43.2rem;
    border: none;
    border-radius: .6rem .6rem 0 0;
    box-shadow: 0 0 .8rem .2rem ${props => props.$color};
  }
`;

const VideoFooter = styled.div`
  height: 5.6rem;
  display: flex;
  justify-content: center;
  border-radius: 0rem 0rem 1rem 1rem; 

  button {
    background: transparent;
    color: var(--gray-light);
    font-size: 1.6rem;
    margin: 0 1rem;
    border: none;
    display: flex;
    gap: 1rem;
    align-items: center;

    img {
      height: 2.8rem;
      width: 2.8rem;
    }
  }
`;

export default function Video({ video, color }) {
  const { selectVideo } = useVideosContext();

  return(
    <VideoContainer $color={color}>
      <VideoPlayer $color={color}>
        <iframe src={video.url} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </VideoPlayer>

      <VideoFooter $color={color}>
        <button>
          <img 
            src="/icons/remove.png"
            alt="Remover"
          />
          <span>DELETAR</span>
        </button>

        <button onClick={() => selectVideo(video)}>
          <img 
            src="/icons/edit.png"
            alt="Editar"
          />
          <span>EDITAR</span>
        </button>
      </VideoFooter>
    </VideoContainer>
  );
}