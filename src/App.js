import { Routes, Route } from "react-router-dom";
import Page from "./Page";
export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Page/>}/>
    </Routes>
  )
}

 
