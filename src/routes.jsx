import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewVideo from "./pages/NewVideo";
import PageContent from "./pages/PageContent";
  
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalStyle/>

      <Routes>
        <Route path="/" element={<PageContent/>}>
          <Route index element={<Home/>}/>
          <Route path="/new" element={<NewVideo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


