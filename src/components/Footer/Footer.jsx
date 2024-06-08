import React, { useContext } from "react";
import { ThemeContext } from "@/Hooks/Theme";
import { RiTwitterXFill, RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import Logo2 from "@/assets/Logo-invert.png";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();
  return (
    <Flex
      align="center"
      justify="space-between"
      className={`${
        isDark ? "bg-zinc-500" : "bg-white"
      } z-10 transition-all bottom-0  border border-zinc-700 border-dashed border-b-0 md:px-24 border-x-0 flex p-2 bg-opacity-5 backdrop-blur-lg  `}
    >
      <a href="#">
        <img src={isDark ? Logo : Logo2} alt="" className="h-14 opacity-80" />
      </a>
      <p className="text-2l ">Annuar - @{currentYear}</p>
      <Flex className="text-2xl " gap=".8rem">
        <Link
          to="https://twitter.com/dfw_ramo"
          target="_blank"
          className="hover:text-gray-500 "
        >
          <RiTwitterXFill />
        </Link>
        <Link
          to="https://github.com/ramo-dev"
          target="_blank"
          className="hover:text-gray-500 "
        >
          <RiGithubFill />
        </Link>
        <Link
          to="https://www.linkedin.com/in/annuar-ndungu"
          target="_blank"
          className="hover:text-gray-500 "
        >
          <FaLinkedin />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
