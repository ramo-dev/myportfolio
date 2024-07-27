
import { FC, useState } from "react";
import { Linkedin, Code2, Mail, Bot } from "lucide-react";
import { Button } from "./ui/button";
import ChatDialog from "./ChatBot";


interface Icon {
  href: string;
  icon: JSX.Element;
}

const Icons: Icon[] = [
  {
    href: "https://www.linkedin.com/in/annuar-ndungu/",
    icon: <Linkedin className="text-foreground hover:text-blue-300" />
  },
  {
    href: "https://github.com/ramo-dev",
    icon: <Code2 className="text-foreground hover:text-blue-300" />
  },
  {
    href: "mailto:hello@annuar.site",
    icon: <Mail className="text-foreground hover:text-blue-300" />
  }
];

const FloatingIcons: FC = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatDialog = () => {
    setChatOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 flex flex-col items-center gap-2 md:gap-4 md:mb-6 md:mr-6">
      <Button
        size="icon"
        className="rounded-full"
        onClick={toggleChatDialog}
      >
        <Bot />
      </Button>

      {Icons.map((itm, idx) => (
        <a
          href={itm.href}
          key={idx}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          {itm.icon}
        </a>
      ))}

      {isChatOpen && <ChatDialog isOpen={isChatOpen} onClose={toggleChatDialog} />}
    </div>
  );
};

export default FloatingIcons;

