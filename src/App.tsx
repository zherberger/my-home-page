import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Projects from './Projects';
import Sidenav from './Sidenav';
import CV from './CV';
import Contact from './Contact';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Sidenav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
