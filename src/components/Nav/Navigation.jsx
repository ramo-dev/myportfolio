import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flex } from "antd";
import { ThemeContext } from '@/Hooks/Theme';
import { LuMoonStar, LuSun } from "react-icons/lu";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Logo from "@/assets/Logo.png";
import LogoInvert from "@/assets/Logo-invert.png"

const Navigation = () => {
  const { setIsDark, isDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const themeIconRef = useRef(null);

  useEffect(() => {
    const handleBounce = () => {
      themeIconRef.current.style.animation = 'bounce 0.5s';
      setTimeout(() => {
        themeIconRef.current.style.animation = '';
      }, 500);
    };

    const themeIcon = themeIconRef.current;
    if (themeIcon) {
      themeIcon.addEventListener('click', handleBounce);
    }

    return () => {
      if (themeIcon) {
        themeIcon.removeEventListener('click', handleBounce);
      }
    };
  }, []);

  function handleThemeChange() {
    setIsDark(!isDark);
  }
  return (
    <Flex justify="center">
      <nav className={`${isDark ? "bg-zinc-500" : "bg-white"} z-10 transition-all  w-full  fixed border border-zinc-700 border-dashed border-t-0 md:px-24 border-x-0 flex p-3 bg-opacity-5 backdrop-blur-lg mx-auto ${isOpen ? 'flex-col' : 'flex-row'} ${isOpen ? 'h-auto' : 'md:h-20'}`}>
        <div className="flex items-center space-x-6 justify-between w-full">
          <Link to="/">
            <img draggable={false} src={`${isDark ? Logo : LogoInvert}`} alt="Logo" className="h-16  hover:animate-spin " />
          </Link>
          <div className={`${isDark ? "text-white" : "text-black"} hidden md:flex items-center space-x-8`}>
            
            <div className={`${isDark ? "text-white" : "text-black"} flex space-x-7 text-lg`}>
            <Link to="/" className="hover:text-gray-500">Home</Link>
              <Link to="/projects" className="hover:text-gray-500">Projects</Link>             
              <Link to="/contact" className="hover:text-gray-500">Contact</Link>
              
            </div>

            <button
              ref={themeIconRef}
              onClick={handleThemeChange}
              className="hover:opacity-50 scale-125 pe-1 bounce"
            >
              {isDark ? <LuSun /> : <LuMoonStar />}
            </button>
            <a href="https://blog.annuar.site" className="hover:text-gray-500 px-8 ms-0 bg-zinc-700 py-3 rounded-lg dark:text-white">My Blog</a>
          </div>
        </div>

        <div className={`md:hidden flex items-center ${isDark ? "text-white" : "text-black"}`}>
        <button
              ref={themeIconRef}
              onClick={() => setIsDark(!isDark)}
              className="hover:opacity-50 focus:outline-none absolute top-8 right-20 scale-[1.7]"
            >
              {isDark ? <LuSun /> : <LuMoonStar />}
            </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" focus:outline-none absolute top-[24px] right-3 text-3xl me-1"
          >
           {isOpen ? <RxCross1/> : <RxHamburgerMenu/>}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full border-zinc-700 text-xl rounded-md md:hidden ${isDark ? "text-white" : "text-black"}`}
          
        >
          <Link to="/" className="block px-4 py-3 hover:opacity-50 mt-4">Home</Link>
          <Link to="/projects" className="block px-4 py-3 hover:opacity-50">Projects</Link>
          <Link to="/contact" className="block px-4 py-3 hover:opacity-50">Contact</Link>
          <a href="https://blog.annuar.site" className="block px-4 py-3 hover:opacity-50">Blog</a>
        </div>
      </nav>
    </Flex>
  );
};

export default Navigation;