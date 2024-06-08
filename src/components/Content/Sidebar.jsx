import { Divider, Flex } from "antd";
import  { useContext } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/Hooks/Theme";
import Logo from "@/assets/Logo.png";
import Logo2 from "@/assets/Logo-invert.png";
import MyCv from "../../assets/MyCV.pdf";

const Sidebar = () => {
  const { isDark } = useContext(ThemeContext);
  const text = isDark ? "text-white" : "text-black";
  return (
    <div
      className={`md:px-7 pt-5 px-5 md:rounded-t-3xl z-0 bg-opacity-20 backdrop-blur-lg sticky bottom-15 border-zinc-700  md:w-3/12 h-full min-w-[40vh]  ${
        isDark
          ? "border border-dashed border-zinc-700"
          : "border border-dashed border-zinc-200"
      }`}
    >
      <img
        src={isDark ? Logo : Logo2}
        alt=""
        className="opacity-85 h-10/12 md:block hidden"
        draggable="false"
      />

      <div
        className={`hover:scale-125 transition ps-2 border border-dashed h-12 w-12 text-3xl rounded-full pt-2 absolute top-52 right-[-2vh] hover:justify-start hidden md:flex${
          isDark
            ? " border-zinc-700 bg-zinc-950 "
            : " border-zinc-700 bg-zinc-100"
        }`}
      >
        <MdOutlineWavingHand />
      </div>
      <Flex align="center" vertical gap="1rem" className="pb-4">
        <h1 className="text-3xl font-semibold">Annuar Ndung'u</h1>
        <button
          className={`p-2 ${
            isDark ? "bg-zinc-800" : "border border-dashed border-zinc-700"
          } rounded-2xl text-xs ${text}`}
        >
          Software Developer
        </button>

        <Divider plain className="bg-gray-600" />

        <Flex gap="1rem" align="center" className="w-full ">
          <IoMailUnreadOutline className="text-5xl bg-opacity-10 backdrop-blur-sm bg-white rounded-lg p-2" />
          <Flex vertical>
            <h1>Email</h1>
            <Link
              to="mailto:anuarramo@gmail.com"
              className="hover:text-gray-500"
            >
              anuarramo@gmail.com
            </Link>
          </Flex>
        </Flex>
        <Flex gap="1rem" align="center" className="w-full">
          <IoPhonePortraitOutline className="text-5xl bg-opacity-10 backdrop-blur-sm bg-white rounded-lg p-2" />
          <Flex vertical>
            <h1>Phone</h1>
            <Link to="tel:+254706228494" className="hover:text-gray-500">
              +254-706228494
            </Link>
          </Flex>
        </Flex>
        <a
          href={MyCv}
          download
          className={`hover:text-zinc-400 p-3 bg-inherit border border-dashed border-zinc-700 w-full text-center`}
        >
          Download My Cv
        </a>
      </Flex>
    </div>
  );
};

export default Sidebar;
