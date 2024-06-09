import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Hooks/Theme";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactComp = () => {
  const { isDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const API = import.meta.env.VITE_REMOTE_URL

  const { register, handleSubmit } = useForm();

  function handleOk() {
    setIsOpen(!isOpen);
  }

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // console.log(res);
      setIsLoading(false);
      handleOk();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const text = isDark ? "text-black" : "text-white";
  const bg = ` ${
    isDark ? "bg-transparent text-white border" : "bg-transparent text-black"
  } border border-zinc-700 rounded-lg w-full `;
  return (
    <div>
      {isOpen && (
        <Modal
          onCancel={handleOk}
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          footer={
            <button
              onClick={handleOk}
              type="submit"
              className={`w-full md:self-end mt-5 p-3 rounded-lg ${
                isDark ? "bg-zinc-200" : "bg-zinc-700"
              } ${text} hover:bg-opacity-50`}
            >
              Dismiss Message
            </button>
          }
        >
          <p className="text-md mt-4">
            Message sent successfully, you will receive a confirmation email
            shortly, if you ddnt try checking your spam folder
          </p>
        </Modal>
      )}
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
          className={`md:w-4/12 md:self-end mt-3 p-3 rounded-lg flex justify-center ${
            isDark ? "bg-zinc-200" : "bg-zinc-700"
          } ${text} hover:bg-opacity-80`}
        >
          {loading ? <AiOutlineLoading3Quarters className="animate-spin "/> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactComp;
