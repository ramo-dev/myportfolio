import "./App.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Kursor from "kursor";
import Home from "./routes/Home";
import { useState } from "react";
import PreLoader from "./components/UI/PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    new Kursor({
      type: 1, // Cursor type: 1 for default, 2 for following, 3 for circular
      removeDefaultCursor: true, // Remove default cursor
      color: "#000", // Cursor color
      hover: true, // Enable hover effect
      click: true, // Enable click effect
      zIndex: 999999, // Cursor z-index
    });
  }, []);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    async function sendToServer() {
      try {
        const resp = await fetch(
          "https://myportserver.onrender.com/wakeUpserver",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ action: "Wake the server up" }), // Sending data as JSON string
          }
        );
        const data = await resp.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    sendToServer();
  }, []);


  return isLoading ? (
    <PreLoader />
  ) : (
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

export default App;
