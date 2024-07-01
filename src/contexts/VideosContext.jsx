import { createContext, useContext, useEffect, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export function VideosProvider({ children }) {
  const [tags, setTags] = useState([]);
  const [videos, setVideos] = useState([]);

  return(
    <VideosContext.Provider
      value={{
        tags,
        setTags,
        videos,
        setVideos
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export function useVideosContext() {
  const {
    tags,
    setTags,
    videos,
    setVideos
  } = useContext(VideosContext);

  useEffect(() => {
    fetch('http://localhost:3000/tags')
      .then(res => res.json())
      .then(data => setTags(data));
    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(data => setVideos(data));
    }, []);
    
  return {
    tags,
    videos
  }
}