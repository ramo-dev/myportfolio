import Sidebar  from "@/components/Content/Sidebar";
import Main from "@/components/Content/Main";
import Footer from "@/components/Footer/Footer";
import { ThemeContext } from "@/Hooks/Theme";
import  { useContext } from "react";
import Navigation from "@/components/Nav/Navigation";
import { Flex } from "antd";
import ProjectContent from "@/components/Content/ProjectContent";
import { Helmet } from "react-helmet";

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const text = isDark ? "text-white" : "text-black";
  return (
    <div
    className={`${
      isDark ? "bg-zinc-950 " : "bg-gray-100 bg-opacity-20"
    }${text} transition-all h-screen justify-between grid-background flex flex-col min-h-screen`}
  >
    <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects</title>
      </Helmet>
    <Navigation />
    <Flex justify="center" gap="1.4rem" className="my-24 px-3 relative flex-col-reverse md:flex md:flex-row">
      <Sidebar />

        <Main Component={ProjectContent} Title="Projects" />
      </Flex>
      <Footer />
    </div>
  );
};

export default Projects;
