import './App.css'
import About from './routes/About'
import Contact from "./routes/Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect } from 'react'
import Kursor from "kursor"
import Home from './routes/Home'

function App() {
  useEffect(() => {
    new Kursor({
      type: 1, // Cursor type: 1 for default, 2 for following, 3 for circular
      removeDefaultCursor: true, // Remove default cursor
      color: "#ff0000", // Cursor color
      hover: true, // Enable hover effect
      click: true, // Enable click effect
      zIndex: 999999, // Cursor z-index
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
