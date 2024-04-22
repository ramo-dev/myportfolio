import React, { useState } from "react";
import HeroImg from "../../assets/Retro.png";
import "./HeroStyles.css";
import Arrow from "../../assets/arrow.png";
import { ForwardOutlined } from "@ant-design/icons";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const mouseX = (clientX / window.innerWidth - 0.5) * 30; // Adjust the multiplier to control the rotation speed
    const mouseY = (clientY / window.innerHeight - 0.5) * 15; // Adjust the multiplier to control the rotation speed
    setMousePosition({ x: mouseX, y: mouseY });
  };

  return (
    <div className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-text">
        <h1>
          <span style={{ whiteSpace: "nowrap" }}>Creative Designer </span>
          <br />
          <span style={{ whiteSpace: "nowrap" }}>& Developer.</span>
        </h1>
        <p>
          Hi im Annuar Ndungu. A passionate UI/UX designer and Fullstack
          developer based in Nairobi, Kenya.
        </p>

        <button className="btn">Hire Me</button>
      </div>

      <div
        className="Hero-img"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        }}
      >
        <img src={HeroImg} alt="" />
      </div>
      <a href="#homepage" className="navigation-wrapper">
      <ForwardOutlined className="navigation"/>
      </a>
    </div>
  );
};

export default Hero;
