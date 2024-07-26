
import Image from "next/image";
import { ExternalLinkIcon } from 'lucide-react';

const projects = [
  {
    href: "https://www.github.com/ramo-dev/brightspend",
    src: "/projects/BrightspendLandingPage.png",
    alt: "BrightSpend Landing Page",
    title: "BrightSpend Landing Page",
    description: "The landing page for BrightSpend, an AI-powered financial education platform built with material tailwind, react and zustand for state management.",
    width: 800,
    height: 400
  },
  {
    href: "https://www.github.com/ramo-dev",
    src: "/projects/CLIChatBot.png",
    alt: "CLI ChatBot",
    title: "CLI ChatBot",
    description: "A command-line interface chatbot for interactive user interactions.",
    width: 800,
    height: 400
  },
  {
    href: "https://www.github.com/ramo-dev",
    src: "/projects/Tees&Stuffs.png",
    alt: "Tees & Stuffs",
    title: "Tees & Stuffs",
    description: "An e-commerce store specializing in selling T-shirts and related merchandise. Built with NextJs, Shadcn, Prisma, MongoDB, and NextAuth.",
    width: 800,
    height: 400
  },
  {
    href: "https://www.github.com/ramo-dev",
    src: "/projects/Bizna-Dashboard.png",
    alt: "Bizna Dashboard",
    title: "Bizna Dashboard",
    description: "A dashboard application for managing business analytics and insights from their clients while selling digital goods conveniently.",
    width: 800,
    height: 400
  }
];

const Projects = () => {
  return (
    <>
      <h1 className="leading font-bold text-3xl mt-14">My Latest Projects</h1>
      <p className="text-lg my-5">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my latest.</p>
      <div className="flex flex-wrap gap-4 my-8">
        {projects.map((project, index) => (
          <a key={index} href={project.href} className="flex flex-col h-84 p-3 min-w-[250px] flex-1 w-full md:w-1/2 rounded-lg text-foreground border bg-transparent">
            <Image
              src={project.src}
              alt={project.alt}
              width={project.width}
              height={project.height}
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy" // Enables lazy loading
            />
            <div className="flex-1 flex flex-col pt-3">
              <h1 className="text-xl font-bold text-foreground-background hover:text-blue-300 mb-2">{project.title}</h1>
              <p className="text-foreground-background line-clamp-3">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      <a href="https://www.github.com/ramo-dev" className="hover:animate-pulse text-blue-500 dark:hover:text-blue-500/70 flex items-center gap-1">Explore other Projects <ExternalLinkIcon className="h-5" /></a>
    </>);
}

export default Projects;

