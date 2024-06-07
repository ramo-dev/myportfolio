import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { ThemeContext } from "./context/Theme";
import {useState} from "react"

function App() {
  const [isDark , setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{setIsDark, isDark}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={Home} />
          <Route path="/projects" Component={Home} />
          <Route path="/blog" Component={Home} />
          <Route path="/contact" Component={Home} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
