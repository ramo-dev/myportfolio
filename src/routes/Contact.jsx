import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Flex } from "antd";
import Footer from "../components/Footer/Footer";
import pnwRetro from  "../assets/pnw.png"
import {toast, Toaster} from  "sonner";
import {LoadingOutlined} from "@ant-design/icons"


const Contact = () => {
  // State for form fields
const [name, setName] = useState('')
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMassage] = useState("");
const [loading, setIsLoading] = useState(false);

const form = {name, email, subject , message}


async function handleSendingEmail(){
  try{
    setIsLoading(true)
    const resp = await fetch("https://myportserver.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  toast.info("Thank You for Reaching Out, Keep an eye for my email soon")
    setIsLoading(false)
  }
  catch(err){
    toast.info(err)
  }finally{
    setEmail("")
    setName("");
    setMassage("");
    setSubject("");
  }
}

function handleSubmit(e){
  e.preventDefault()
  if (
    name.length == 0 ||
    email.length == 0 ||
    subject.length == 0 ||
    message.length == 0
  ) {

    toast.info("Please fill in the required form")
  }
  else{
    handleSendingEmail()
  }
}


  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <div className="contact">
        <img src={pnwRetro} alt="" />
        <form onSubmit={handleSubmit} className="input-container">
          <Flex vertical align="center">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input-box"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input-box"
              required
            />
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="input-box"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMassage(e.target.value)}
              placeholder="Message"
              className="input-message"
              required
            />
            <button className="btn form-btn" type="submit">
              {loading ? <LoadingOutlined className="loader-contact"/> : "Send Me a Message"}
            </button>
          </Flex>
        </form>
      </div>
    </>
  );
};

export default Contact;
