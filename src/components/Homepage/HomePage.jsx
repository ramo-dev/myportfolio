import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ForwardOutlined, SwapLeftOutlined } from "@ant-design/icons";
import toproducts from "../../assets/arraw.png";

import Retro2 from "../../assets/Retro.png";
import "./HomeStyles.css";
import { Flex, Image } from "antd";
import { projects } from "./Projects";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const { scrollY } = useScroll();

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [showDiv5, setShowDiv5] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();

      // Check the scroll position and update state accordingly for each div
      if (scrollPosition > 100) {
        setShowDiv1(true);
      } else {
        setShowDiv1(false);
      }

      if (scrollPosition > 400) {
        setShowDiv2(true);
      } else {
        setShowDiv2(false);
      }

      if (scrollPosition > 600) {
        setShowDiv3(true);
      } else {
        setShowDiv3(false);
      }

      if (scrollPosition > 800) {
        setShowDiv4(true);
      } else {
        setShowDiv4(false);
      }

      if (scrollPosition > 1000) {
        setShowDiv5(true);
      } else {
        setShowDiv5(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div className="homepage" id="homepage">
        <div
          className="homepage-text"
          style={{
            transform: showDiv1 ? "translateX(0)" : "translateX(-100%)",
            transition: "2s ease",
          }}
        >
          <h1>Crafted With Love.</h1>
          <p>These are a selection of my recent work</p>
        </div>

        <div className="continue-to-projects">
          <img src={toproducts} alt="" />
        </div>

        {projects.map((item, index) => {
          const divState = "showDiv" + (index + 1);

          return (
            <div
              className="homepage-project-wrapper"
              style={{ background: item.background, color: item.color }}
              key={item.id}
            >
              <Flex className="homepage-project-text" justify="space-between">
                <div>
                  <span>
                    <SwapLeftOutlined />
                  </span>
                  <h1>{item.date}</h1>
                </div>
                <h1>{item.type}</h1>
              </Flex>
              <Flex
                className={item.className}
                align="center"
                justify="space-between"
                gap="3rem"
              >
                <Image src={item.image} className="projectImg" />

                <Flex
                  vertical
                  className="homepage-product-info-text"
                  style={{
                    transform: showDiv1 ? "translateX(0)" : "translateX(-100%)",
                    transition: "2s ease",
                  }}
                >
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <br />
                  <a href={item.link} target="_blank">
                    <button
                      className="btn product-link"
                      style={{
                        background: item.color,
                        fontSize: "1rem",
                        color: item.background,
                        transition : "0.3s ease-in-out",
                        ":hover ": {
                          background : item.background,
                          color: item.color
                        }
                      }}
                    >
                      Visit
                    </button>
                  </a>
                </Flex>
              </Flex>
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
