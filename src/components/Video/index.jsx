import styled from "styled-components";

const VideoContainer = styled.div`
  height: 32rem;
  width: 43.2rem;
  `;

const VideoPlayer = styled.div`
  iframe {
    height: 26rem;
    width: 100%;
    border: .4rem solid ${props => props.$color};
    border-radius: .6rem .6rem 0 0;
    box-shadow: 0 0 .8rem .2rem ${props => props.$color};
  }
`;

const VideoFooter = styled.div`
  background-color: var(--black);
  height: 5.6rem;
  display: flex;
  justify-content: center;
  border: .4rem solid ${props => props.$color};
  border-top: none;
  border-radius: 0rem 0rem 1rem 1rem; 
  box-shadow: 0 -.6rem 1.2rem -.3rem inset ${props => props.$color};

  button {
    background: transparent;
    color: var(--gray-light);
    font-size: 1.6rem;
    padding: 2rem;
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

export default function Video({ url, title, color}) {
  return(
    <VideoContainer>
      <VideoPlayer $color={color}>
        <iframe src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </VideoPlayer>

      <VideoFooter $color={color}>
        <button>
          <img src="/icons/remove.png"/>
          <span>DELETAR</span>
        </button>

        <button>
          <img src="/icons/edit.png"/>
          <span>EDITAR</span>
        </button>
      </VideoFooter>
    </VideoContainer>
  );
}