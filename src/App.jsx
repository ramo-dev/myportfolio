import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/routes/Home";
import { ThemeContext } from "@/Hooks/Theme";
import { useEffect, useState } from "react";
import Projects from "@/routes/Projects";
import Contact from "@/routes/Contact";
import ProjectPreview from "@/routes/ProjectPreview";
import NotFound from "@/routes/NotFound";
import getUserInfo from "./utils/GetGeo";

function App() {
  const api = import.meta.env.VITE_WAKE_UP;
  const DATA = import.meta.env.VITE_SENDUSER
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


  useEffect(()=>{
    async function getdetails(){
      const resp = await getUserInfo();
      
      return resp;
    }
    async function sendUserData(){
      const resp = await getdetails();
      
        await fetch(DATA, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userInfo : resp}),
        });
    }
    sendUserData();
  },[DATA])



  return (
    <ThemeContext.Provider value={{ setIsDark, isDark }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/projects/:id" Component={ProjectPreview} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
