import Navigation from "@/components/Nav/Navigation";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";
import { Flex, Card } from "antd";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Content/Sidebar";
import Main from "@/components/Content/Main";

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  const text = isDark ? "text-white" : "text-black";

  return (
    <div
      className={`${
        isDark ? "bg-zinc-950 " : "bg-gray-100 bg-opacity-20"
      }${text} transition-all h-screen justify-between grid-background flex flex-col`}
    >
      <Navigation />
      <Flex justify="center" gap="1.4rem" className="my-24 px-3 relative">
        <Sidebar />
        <Main />
      </Flex>
      <Footer />
    </div>
  );
};

export default Home;
