import { Flex, Result } from "antd";
import React, { useContext } from "react";
import { ThemeContext } from "../Hooks/Theme";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Result
      status={404}
      className={`${isDark ? "bg-black" : "bg-white text-black"} h-screen`}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found</title>
      </Helmet>
      <Flex
        align="center"
        vertical
        className={`${isDark ? "bg-black text-white" : "bg-white text-black"} `}
      >
        <h1 className="text-3xl my-2">Oops seems Like you're lost</h1>
        <Link
          to="/"
          className={`p-3 transition hover:text-zinc-400 ${
            isDark
              ? "bg-white text-black hover:bg-black"
              : "bg-black text-white hover:bg-white"
          } mt-4 border border-dashed border-zinc-700`}
        >
          Take me Home
        </Link>
      </Flex>
    </Result>
  );
};

export default NotFound;
