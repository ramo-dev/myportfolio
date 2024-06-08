import { Card, Flex } from "antd";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { RiPaintBrushLine } from "react-icons/ri";
import { TbWriting } from "react-icons/tb";
import { useContext } from "react";
import { ThemeContext } from "@/Hooks/Theme";

const MainContent = () => {
  const { isDark } = useContext(ThemeContext);
  const icon = `${isDark ? "text-white  bg-zinc-700" : "text-black  bg-zinc-300"} transition md:text-8xl text-6xl md:bg-transparent p-3 rounded-full`;
  const text = isDark ? "text-white" : "text-black";
  const card = ` transition hover:scale-[1.01] h-30 md:w-1/2 w-full bg-transparent border-zinc-700 border border-dashed rounded-2xl text-xs ${text}`;
  return (
    <>
      <div className="px-0 py-3 md:px-0 lg:px-0 max-w-3xl">
        <p className=" mb-4 md:whitespace-break-spaces">
          Hey there! I'm Annuar Ndungu, a UI/UX designer and Fullstack developer
          from Nairobi, Kenya. 🇰🇪
        </p>
        <p className=" mb-4 ">
          I craft custom web solutions that blend precision with passion. 🎨💻
        </p>
        <p className=" mb-4 ">
          From vibrant SPAs to dynamic web apps, I turn ideas into seamless
          digital experiences. ✨
        </p>
        <p className=" mb-4 ">
          I work closely with clients to exceed their expectations and stay
          ahead in the ever-evolving web development world. 🚀
        </p>
        <p>Let's create something amazing together! 🌟</p>
      </div>

      <span className="my-4"></span>
      <h2 className="text-2xl font-bold">What I'm Doing</h2>
      <span
        className={`h-1 ${
          isDark ? "bg-white" : "bg-black"
        } opacity-70 rounded-lg my-6 w-52`}
      ></span>
      <Flex gap="1rem" className="md:flex-nowrap flex-wrap">
        <Card className={`${card}`}>
          <Flex gap="1rem" className="md:flex-row flex-col " align="center" >
            <RiPaintBrushLine className={`${icon}`} />
            <Flex vertical gap=".4rem">
              <h1 className="text-xl font-bold">Web Design</h1>
              <p className="text-sm">
                Crafting visually stunning and user-friendly interfaces that
                leave a lasting impression.
              </p>
            </Flex>
          </Flex>
        </Card>
        <Card className={`${card}`}>
          <Flex gap="1rem" className="md:flex-row flex-col " align="center" >
            <FaLaptopCode className={`${icon}`} />
            <Flex vertical gap=".4rem">
              <h1 className="text-xl font-bold">Web Development</h1>
              <p className="text-sm">
                Building robust, scalable web applications with cutting-edge
                technology.
              </p>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <br />
      <Flex gap="1rem" className="md:flex-nowrap flex-wrap">
        <Card className={`${card}`}>
          <Flex gap="1rem" className="md:flex-row flex-col " align="center" >
            <LuBrainCircuit className={`${icon}`} />
            <Flex vertical gap=".4rem">
              <h1 className="text-xl font-bold">AI Integration</h1>
              <p className="text-sm">
                Seamlessly embedding AI solutions to enhance user experiences
                and automate processes.
              </p>
            </Flex>
          </Flex>
        </Card>
        <Card className={`${card}`}>
          <Flex gap="1rem" className="md:flex-row flex-col " align="center" >
            <TbWriting className={`${icon}`}/>
            <Flex vertical gap=".4rem">
              <h1 className="text-xl font-bold">Technical Writing</h1>
              <p className="text-sm">
                Delivering clear, concise, and informative technical
                documentation and content.
              </p>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default MainContent;
