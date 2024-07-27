import { HomeIcon, User, MessageCircle, Bot, Blocks } from "lucide-react";


export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Blocks className="text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <MessageCircle className="text-neutral-500 dark:text-white" />,
  },
];

