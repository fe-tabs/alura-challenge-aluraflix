import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
  
export default function AppRoutes() {
  return (
    <>
      <GlobalStyle/>

      <Header/>

      <Home/>

      <Footer/>
    </>
  )
}


