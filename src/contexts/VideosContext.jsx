import { createContext, useContext, useEffect, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export function VideosProvider({ children }) {
  const [tags, setTags] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  return(
    <VideosContext.Provider
      value={{
        tags,
        setTags,
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo
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
    setVideos,
    selectedVideo,
    setSelectedVideo
  } = useContext(VideosContext);

  useEffect(() => {
    fetch('http://localhost:3000/tags')
      .then(res => res.json())
      .then(data => setTags(data));
    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  async function addVideo(video) {
    await fetch('http://localhost:3000/videos', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(video)
    });
  }

  async function editVideo(video) {
    await fetch(`http://localhost:3000/videos/${video.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(video)
    });
  }

  function selectVideo(video) {
    setSelectedVideo(video);
  }

  return {
    tags,
    videos,
    selectedVideo,
    addVideo,
    selectVideo,
    editVideo
  }
}