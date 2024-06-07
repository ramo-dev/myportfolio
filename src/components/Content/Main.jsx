import { Card, Flex } from 'antd'
import React, { useContext } from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { LuBrainCircuit } from 'react-icons/lu'
import { RiPaintBrushLine } from 'react-icons/ri'
import { TbWriting } from 'react-icons/tb'
import { ThemeContext } from '@/context/Theme'

const Main = () => {
    const icon = "text-8xl";
    const { isDark } = useContext(ThemeContext);
    const text = isDark ? "text-white" : "text-black";
    const card = ` transition hover:scale-[1.01] h-30 md:w-1/2 w-full bg-transparent border-zinc-700 border border-dashed rounded-2xl text-xs ${text}`;
  return (
    <div
          className={`p-5 rounded-t-3xl z-0 bg-opacity-20 backdrop-blur-lg sticky bottom-15 border-zinc-700  md:w-7/12 h-full flex flex-col w-full ${
            isDark
              ? "border border-dashed border-zinc-700"
              : "border border-dashed border-zinc-200"
          }`}
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          <br />
          <p className="text-l whitespace-break-spaces">
            Hi i'm Annuar Ndungu. A passionate UI/UX designer and Fullstack
            developer based in Nairobi, Kenya. I craft custom web solutions
            tailored to clients' needs, blending precision with passion to
            exceed expectations in functionality, usability, and design. From
            vibrant SPA to dynamic web applications, I transforms ideas into
            seamless digital experiences, collaborating closely with clients to
            deliver solutions that delight them and stay ahead of the curve in
            the ever-evolving landscape of web development.
          </p>
          <br />
          <h2 className="text-2xl font-bold">What I'm Doing</h2>
          <br />
          <Flex gap="1rem" className="md:flex-nowrap flex-wrap">
            <Card className={`${card}`}>
              <Flex gap="1rem">
                <RiPaintBrushLine className={`${icon}`} />
                <Flex vertical gap=".4rem">
                  <h1 className="text-xl font-bold">Web Design</h1>
                  <p className="text-sm">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </Flex>
              </Flex>
            </Card>
            <Card className={`${card}`}>
              <Flex gap="1rem">
                <FaLaptopCode className={`${icon}`} />
                <Flex vertical gap=".4rem">
                  <h1 className="text-xl font-bold">Web Development</h1>
                  <p className="text-sm">
                    High-quality development of sites at the professional level.
                  </p>
                </Flex>
              </Flex>
            </Card>
          </Flex>
          <br />
          <Flex gap="1rem" className="md:flex-nowrap flex-wrap">
            <Card className={`${card}`}>
              <Flex gap="1rem">
                <LuBrainCircuit className={`${icon}`} />
                <Flex vertical gap=".4rem">
                  <h1 className="text-xl font-bold">Ai Intergration</h1>
                  <p className="text-sm">
                    Professional Intergration of Artificial Intelligence in
                    Webapps.
                  </p>
                </Flex>
              </Flex>
            </Card>
            <Card className={`${card}`}>
              <Flex gap="1rem">
                <TbWriting className={`${icon}`} />
                <Flex vertical gap=".4rem">
                  <h1 className="text-xl font-bold">Technical Writing</h1>
                  <p className="text-sm">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </div>
  )
}

export default Main