import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;