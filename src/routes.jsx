import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tag from "./components/Tag";
  
export default function AppRoutes() {

  return (
    <>
      <GlobalStyle/>

      <Header/>
      <Tag backgroundColor="#6BD1FF">FRONT-END</Tag>
      <Tag backgroundColor="#00C86F">BACK-END</Tag>
      <Tag backgroundColor="#FFBA05">MOBILE</Tag>
      <Footer/>
    </>
  )
}


