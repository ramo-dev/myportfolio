import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/routes/Home";
import { ThemeContext } from "@/Hooks/Theme";
import { useEffect, useState } from "react";
import Projects from "@/routes/Projects";
import Contact from "@/routes/Contact";
import ProjectPreview from "@/routes/ProjectPreview";
import NotFound from "@/routes/NotFound";

function App() {
  const api = import.meta.env.VITE_WAKE_UP;
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(()=>{
    async function wakeServer(){
      const x = await fetch(api);
      console.log(x.status)
    }
    wakeServer();
  },[api])

  return (
    <ThemeContext.Provider value={{ setIsDark, isDark }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/projects/:id" Component={ProjectPreview} />
          <Route path="/blog" />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
