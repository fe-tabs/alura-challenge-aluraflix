import styled from "styled-components";
import { useVideosContext } from "../../contexts/VideosContext";
import { useState } from "react";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalDialog = styled.dialog`
  background: #03122F;
  color: var(--gray-light);
  width: 92.5%;
  margin: 0 auto;
  padding: 6rem 20rem;
  position: absolute;
  top: 71.2rem;
  border: .4rem solid #6BD1FF;
  border-radius: 1.6rem;

  @media (max-width: 1024px) {
    padding: 6rem;
  }
`;

const ModalForm = styled.form`
  font-family: var(--secondary-font-family);
  font-size: 2rem;
  position: relative;
  display: flex;
  gap: 6rem;
  flex-wrap: wrap;

  h3 {
    color: var(--blue);
    font-family: var(--primary-font-family);
    font-size: 6rem;
    font-weight: 700;
    flex: 100%;
  }
`;

const ModalFormGroup = styled.div`
  display: flex;
  gap: 2rem;
  flex: calc(50% - 3rem);
  flex-direction: column;
  
  &:nth-child(5) {
    flex: 100%;
  }

  &:last-child {
    flex-direction: row;
    
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  label {
    font-weight: 500;
  }

  input,
  select, 
  textarea {
    background: transparent;
    color: var(--gray-light);
    padding-inline: 1rem;
    border: .2rem solid #7A7A7A;
    outline: none;
    border-radius: 1rem;
  }
  
  input[type="text"],
  select {
    height: 6.2rem;
  }

  select {
    option {
      background-color: var(--gray-mid);
    }
  }

  textarea {
    padding: 2rem 1rem;
  }

  input[type="submit"],
  input[type="reset"] {
    height: 5.4rem;
    width: 18rem;
    font-weight: 900;
    cursor: pointer;
    
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  input[type="submit"] {
    border-color: var(--blue);
  }
`;

const ModalCancelIcon = styled.img`
  position: absolute;
  top: 1rem;
  right: 0;
`;

export default function Modal({ selectedVideo }) {
  const { tags, selectVideo, editVideo } = useVideosContext();
  
  const [title, setTitle] = useState(selectedVideo.title);
  const [tagId, setTagId] = useState(selectedVideo.tagId);
  const [url, setUrl] = useState(selectedVideo.url);
  const [description, setDescription] = useState(selectedVideo.description);

  function handleFormSubmit(e) {
    e.preventDefault();

    editVideo({
      id: selectedVideo.id,
      title,
      url,
      description,
      tagId
    });

    selectVideo(null);
  }

  return(
    <>
      {selectedVideo && 
        <>
          <Overlay/>
          <ModalDialog open={!!selectedVideo}>
            <ModalForm method="dialog" onSubmit={e => handleFormSubmit(e)}>
              <h3>EDITAR VÍDEO</h3>

              <ModalCancelIcon
                src="/icons/cancel.png"
                alt="Cancelar"
                onClick={() => selectVideo(null)}
              />

              <ModalFormGroup>
                <label htmlFor="title">Título</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Insira o título"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </ModalFormGroup>

              <ModalFormGroup>
                <label htmlFor="tagId">Categoria</label>
                <select 
                  id="tagId" 
                  name="tagId"
                  value={tagId}
                  onChange={e => setTagId(e.target.value)}
                >
                  <option value="" disabled></option>
                  {tags.map(tag => (
                    <option key={tag.id} value={tag.id}>{tag.name}</option>
                  ))}
                </select>
              </ModalFormGroup>

              <ModalFormGroup>
                <label htmlFor="url">Link</label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  placeholder="Insira o link do YouTube"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </ModalFormGroup>
              
              <ModalFormGroup>
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Sobre o que é esse vídeo?"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
              </ModalFormGroup>

              <ModalFormGroup>
                <input type="submit" value="ENVIAR"/>
                <input type="reset" value="LIMPAR"/>
              </ModalFormGroup>
            </ModalForm>
          </ModalDialog>
        </>
      }
    </>
  );
}