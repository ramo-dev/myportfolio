import Navigation from "@/components/Nav/Navigation";
import { useContext } from "react";
import { ThemeContext } from "@/Hooks/Theme";
import { Flex } from "antd";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Content/Sidebar";
import Main from "@/components/Content/Main";
import MainContent from "@/components/Content/MainContent";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
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
        <title>Annuar Ndung'u</title>
      </Helmet>
      <Navigation />
      <Flex
        justify="center"
        gap="1.4rem"
        className="my-24 px-3 relative flex-col md:flex md:flex-row"
      >
        <Sidebar />

        <Main
          Component={MainContent}
          Title="About Me"
          project={
            <Link to="/projects" className="w-full">
              <button className=" md:hidden py-3 my-4 rounded-full border border-zinc-700 w-full border-dashed">
                check out my projects
              </button>
            </Link>
          }
        />
      </Flex>

      <Footer />
    </div>
  );
};

export default Home;
