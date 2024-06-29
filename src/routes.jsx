import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tag from "./components/Tag";
import Video from "./components/Video";
  
export default function AppRoutes() {

  return (
    <>
      <GlobalStyle/>

      <Header/>
      <Tag backgroundColor="#6BD1FF">FRONT-END</Tag>
      <Video
        title="O que faz uma desenvolvedora front-end?"
        url="https://www.youtube.com/embed/ZY3-MFxVdEw?si=zVhFiDpUCDM__hmY&amp;controls=0"
        color="#6BD1FF"
      />
      
      <Tag backgroundColor="#00C86F">BACK-END</Tag>
      <Video
        title="O que faz uma desenvolvedora front-end?"
        url="https://www.youtube.com/embed/ZY3-MFxVdEw?si=zVhFiDpUCDM__hmY&amp;controls=0"
        color="#00C86F"
      />

      <Tag backgroundColor="#FFBA05">MOBILE</Tag>
      <Video
        title="O que faz uma desenvolvedora front-end?"
        url="https://www.youtube.com/embed/ZY3-MFxVdEw?si=zVhFiDpUCDM__hmY&amp;controls=0"
        color="#FFBA05"
      />

      <Footer/>
    </>
  )
}


