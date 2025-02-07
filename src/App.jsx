
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Projects from './pages/Projects';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
