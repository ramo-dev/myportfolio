import { FC } from "react";
import { Linkedin, Code2, Mail } from "lucide-react";

interface icons {
  href: string,
  icon: JSX.Element,
}

const Icons: icons[] = [
  {
    href: "https://www.linkedin.com/in/annuar-ndungu/",
    icon: <Linkedin className="text-blue-500 dark:text-blue-300" />
  },
  {
    href: "https://github.com/ramo-dev",
    icon: <Code2 className="text-blue-500 dark:text-blue-300" />
  },
  {
    href: "mailto:hello@annuar.site",
    icon: <Mail className="text-blue-500 dark:text-blue-300" />
  }


]



const FloatinIcons: FC = () => {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 flex flex-col items-center gap-2 md:gap-4 md:mb-6 md:mr-6">
      {Icons.map((itm, idx) => (
        <a href={itm.href} key={idx} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
          {itm.icon}
        </a>
      ))}
    </div>

  )
}


export default FloatinIcons;
