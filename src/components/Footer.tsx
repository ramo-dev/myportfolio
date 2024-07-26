
import Link from "next/link";
import { Linkedin, Code2, Download, Book } from "lucide-react";
import { FC } from "react";


interface LinkItem {
  href: string;
  label: string;
  icon: JSX.Element;
  target?: string;
  rel?: string;
  download?: boolean;
  hoverColor: string;
}

//change here 
const links: LinkItem[] = [
  {
    href: "https://www.linkedin.com/in/annuar-ndungu",
    label: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 mr-2" />,
    target: "_blank",
    rel: "noopener noreferrer",
    hoverColor: "text-blue-500",
  },
  {
    href: "https://github.com/ramo-dev",
    label: "GitHub",
    icon: <Code2 className="w-6 h-6 mr-2" />,
    target: "_blank",
    rel: "noopener noreferrer",
    hoverColor: "text-gray-400",
  },
  {
    href: "/cv/annuar-ndungu-cv.pdf",
    label: "Download CV",
    icon: <Download className="w-6 h-6 mr-2" />,
    download: true,
    hoverColor: "text-green-500",
  },
  {
    href: "https://blog.annuar.site",
    label: "Blog",
    icon: <Book className="w-6 h-6 mr-2" />,
    target: "_blank",
    rel: "noopener noreferrer",
    hoverColor: "text-yellow-500",
  }
];

const Footer: FC = () => {
  return (
    <footer className="bg-transparent text-white pb-8">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-2 self-start">Annuar</h1>
        <p className="text-lg mb-6 self-start">Useful Links</p>

        <div className="flex space-x-6 flex-wrap">
          {links.map((link, index) => (
            <Link key={index} href={link.href} passHref legacyBehavior >
              <a
                target={link.target}
                rel={link.rel}
                download={link.download ? true : undefined}
                className={`flex items-center text-white hover:${link.hoverColor}`}
              >
                {link.icon}
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

