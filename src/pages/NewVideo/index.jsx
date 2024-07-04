import styled from "styled-components";
import { useVideosContext } from "../../contexts/VideosContext";
import { useState } from "react";

const NewVideoContainer = styled.section`
  padding: 4rem 6rem;

  @media(max-width: 768px) {
    padding-bottom: 7rem;
  }
`;

const NewVideoTitle = styled.div`
  text-align: center;
  margin-bottom: 4.8rem;

  h2 {
    font-size: 6rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
  }
`;

const NewVideoForm = styled.form`
  font-family: var(--secondary-font-family);
  font-size: 2rem;
  display: flex;
  gap: 6rem;
  flex-wrap: wrap;

  h3 {
    font-size: 3.6rem;
    font-weight: 500;
    flex: 100%;
  }
`;

const NewVideoFormGroup = styled.div`
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

export default function NewVideo() {
  const { tags, addVideo } = useVideosContext();

  const [title, setTitle] = useState('');
  const [tagId, setTagId] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();

    addVideo({
      title,
      url,
      description,
      tagId
    });

    setTitle('');
    setTagId('');
    setUrl('');
    setDescription('');
  }

  return(
    <NewVideoContainer>
      <NewVideoTitle>
        <h2>NOVO VÍDEO</h2>
        <p>
          COMPLETE O FORMULÁRIO PARA ADICIONAR UM NOVO VÍDEO.
        </p>
      </NewVideoTitle>

      <NewVideoForm onSubmit={e => handleFormSubmit(e)}>
        <h3>Adicionar Vídeo</h3>

        <NewVideoFormGroup>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Insira o título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </NewVideoFormGroup>

        <NewVideoFormGroup>
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
        </NewVideoFormGroup>

        <NewVideoFormGroup>
          <label htmlFor="url">Link</label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="Insira o link do YouTube"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </NewVideoFormGroup>
        
        <NewVideoFormGroup>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="Sobre o que é esse vídeo?"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </NewVideoFormGroup>

        <NewVideoFormGroup>
          <input type="submit" value="ENVIAR"/>
          <input type="reset" value="LIMPAR"/>
        </NewVideoFormGroup>
      </NewVideoForm>
    </NewVideoContainer>
  );
}