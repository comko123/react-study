/*eslint-disable*/
import Page from "./Page";
import Detail from "./Detail";
import ErroePages from "./ErrorPages";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
    <Route path="*" element={<ErroePages/>}/>
    <Route path="/" element={<Page/>}/>
    <Route path="/movie/:id" element={<Detail/>}/>
    </Routes>
  )
}

 
