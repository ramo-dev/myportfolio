import { Card, Flex } from "antd";
import { useContext } from "react";
import { ThemeContext } from "@/Hooks/Theme";
import { Link } from "react-router-dom";

const Main = ({ Component, Title, project }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-5 rounded-t-3xl z-0 bg-opacity-20 backdrop-blur-lg sticky bottom-15 border-zinc-700  md:w-7/12 h-full flex flex-col w-full ${
        isDark
          ? "border border-dashed border-zinc-700"
          : "border border-dashed border-zinc-200"
      }`}
    >
      <Flex vertical>
        <h1 className="text-4xl font-bold">{Title && Title}</h1>
        <span
          className={`h-1 ${
            isDark ? "bg-white" : "bg-black"
          } opacity-70 rounded-lg my-2 mt-5 w-40`}
        ></span>
      </Flex>
      {Component && <Component />}
      {project}
    </div>
  );
};

export default Main;
