import React from 'react'
import "./FooterStyles.css"
import { Flex } from 'antd';
import { ForwardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import toproducts from "../../assets/arraw.png";
import backGR from "../../assets/Animation.svg"
const Footer = (props) => {
  return (
    <footer>
      <Flex vertical gap="3rem" align="center">
        <div>
          <span className="footer-Text">{props.title}</span>
          <h1 style={{ fontSize: `${props.fontSize}rem` }}>{props.description}</h1>
          {/* <p>I'm Available for Freelance Work</p> */}
        </div>
        <div className="footer-pointer">
          <img src={toproducts} alt="" style={{ filter: "inverse()" }} />
        </div>
        <Link to="/contact">
          <button className="btn talk-to-me">Contact Me </button>
        </Link>
        <div className="socials">
          <p>{new Date().getFullYear()}.All Right Reserved</p>
        </div>
        <a href="#">
          <ForwardOutlined className="toTop" />
        </a>
      </Flex>
    </footer>
  );
}

export default Footer
