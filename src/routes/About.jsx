import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/About/AboutStyles.css"
import Char3d from "../assets/me2.png"
import Comp3d from "../assets/me1.png"
import { Flex } from "antd";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="aboutText">
        <Flex className="about-sec-1" vertical>
          <h1 className="first-about-title">Who is this Guy?</h1>
          <Flex justify="space-between" wrap="wrap">
            <p>
              Annuar is a passionate and self-taught Fullstack developer with a
              zeal for crafting digital experiences. Over the past years, He has
              delved into the world of Tech, honing his skills and building a
              diverse set of projects that showcase his capabilities.
            </p>
            <img src={Char3d} alt="" />
          </Flex>
        </Flex>
        <Flex className="about-sec-2" vertical>
          <h1 className="second-about-title">What Does He Do?</h1>
          <Flex justify="space-between" wrap="wrap">
            <img src={Comp3d} alt="" />
            <p>
              Annuar crafts custom web solutions tailored to clients' needs,
              blending precision with passion to exceed expectations in
              functionality, usability, and design. From vibrant e-commerce
              platforms to dynamic web applications, he transforms ideas into
              seamless digital experiences, collaborating closely with clients
              to deliver solutions that delight users and stay ahead of the
              curve in the ever-evolving landscape of web development.
            </p>
          </Flex>
        </Flex>
      </div>
      <Footer
        title="Want to Team up?"
        className="abt-footer"
        description="reach out to me!"
        fontSize={2}
      />
    </div>
  );
};

export default About;
