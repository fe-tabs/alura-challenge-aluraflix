import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tag from "./components/Tag";
import Video from "./components/Video";
  
export default function AppRoutes() {
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

  return (
    <>
      <GlobalStyle/>

      <Header/>

      {tags.map(tag => (
        <>
          <Tag key={tag.id} backgroundColor={tag.color}>{tag.name}</Tag>
          {videos.filter(video => video.tagId === tag.id).map(video => (
            <Video
              key={video.id}
              title={video.title}
              url={video.url}
              color={tag.color}
            />
          ))}
        </>
      ))}

      <Footer/>
    </>
  )
}


