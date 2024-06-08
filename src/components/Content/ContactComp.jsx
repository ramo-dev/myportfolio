import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Hooks/Theme";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

const ContactComp = () => {
  const { isDark } = useContext(ThemeContext);
  const { isOpen, setIsOpen } = useState(true);

  const { register, handleSubmit } = useForm();

  function handleOk() {
    setIsOpen(!isOpen);
  }

  const onSubmit = async (data) => {
    handleOk()
  };

  const text = isDark ? "text-black" : "text-white";
  const bg = ` ${
    isDark ? "bg-transparent text-white border" : "bg-transparent text-black"
  } border border-zinc-700 rounded-lg w-full `;
  return (
    <div>
      <Modal
        open={isOpen}
        onOk={handleOk}
        onClose={()=>setIsOpen(!isOpen)}
        footer={
          <button
            onClick={()=>{setIsOpen(!isOpen)}}
            type="submit"
            className={`w-full md:self-end mt-5 p-3 rounded-lg ${
              isDark ? "bg-zinc-200" : "bg-zinc-700"
            } ${text} hover:bg-opacity-80`}
          >
            Dismiss Message
          </button>
        }
      >
        <p className="text-md">
          Message sent successfully, you will receive a confirmation email shortly, if you ddnt try checking your spam folder
        </p>
      </Modal>
      <form
        action=""
        className="flex flex-col mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex md:flex-row flex-col">
          <input
            type="text"
            className={`md:me-1 my-1 px-3 pt-0 h-14 md:w-1/2 ${bg}`}
            placeholder="FullName"
            alt="fullname"
            required
            {...register("fullName")}
          />
          <input
            type="email"
            className={`py-3 md:ms-1 my-1 p-3  h-14 md:w-1/2 ${bg}`}
            placeholder="Email"
            alt="email"
            required
            {...register("email")}
          />
        </div>
        <textarea
          type="text"
          className={`py-3 h-36 pb-24 break-words my-1 p-3 ${bg}`}
          placeholder="Your Message"
          required
          {...register("message")}
        ></textarea>
        <button
          type="submit"
          className={`md:w-4/12 md:self-end mt-3 p-3 rounded-lg ${
            isDark ? "bg-zinc-200" : "bg-zinc-700"
          } ${text} hover:bg-opacity-80`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactComp;
