import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import HomePage from '../components/Homepage/HomePage'
import Footer from '../components/Footer/Footer'
import { FloatButton } from 'antd'
import { CommentOutlined, CustomerServiceOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined, XOutlined } from '@ant-design/icons'

const Home = () => {
  return (
    <div>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          right: 24,
        }}
        className="floating-contact"
        icon={<PhoneOutlined />}
      >
        <FloatButton
          icon={<GithubOutlined />}
          tooltip="github"
          href="https://www.github.com/ramo-dev"
        />
        <FloatButton
          icon={<WhatsAppOutlined />}
          tooltip="whatsapp"
          href="https://wa.me/+254706228494?text=Hi%20there!%20I%20found%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services.%20Could%20we%20discuss%20further%3F"
        />
        <FloatButton
          icon={<LinkedinOutlined />}
          tooltip="LinkedIn"
          href="https://www.linkedin.com/in/annuar-ndungu-5a0690242"
        />
        <FloatButton
          icon={<MailOutlined />}
          tooltip="Google Mail"
          href="mailto:annuar.dev@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20there,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services.%20Could%20we%20discuss%20further%3F"
        />
        <FloatButton
          icon={<XOutlined />}
          tooltip="X(formerly twitter)"
          href="https://twitter.com/ramo_szn"
        />
      </FloatButton.Group>

      <Navbar />
      <Hero />
      <HomePage />
    </div>
  );
}

export default Home
