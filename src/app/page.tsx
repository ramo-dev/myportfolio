
"use client";

import React, { FC } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import FloatinIcons from "@/components/FloatingIcons";
import Skills from "@/components/Skills";
import { navItems } from "@/components/NavItems";



const Home: FC = () => {

  return (
    <>
      {/* Navbar */}
      <FloatingNav navItems={navItems} />
      {/* Hero */}
      <Hero />
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center flex-col">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="md:max-w-2xl w-11/12 mx-auto antialiased pt-7 relative dark:text-white">
          {/* About */}
          <About />
          {/* Skills */}
          <Skills />
          {/* Projects */}
          <Projects />
          {/* Contact */}
          <Contact />
          {/* FloatingIcons */}
          <FloatinIcons />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;



