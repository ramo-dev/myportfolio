

import { BentoGrid, BentoGridItem } from "./BentoGrid";

import { ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    href: "https://www.github.com/ramo-dev",
    src: "/projects/CLIChatBot.png",
    alt: "CLI ChatBot",
    title: "CLI ChatBot",
    description: "A command-line interface chatbot for interactive user interactions.",
  },

  {
    href: "https://www.github.com/ramo-dev",
    src: "/projects/Bizna-Dashboard.png",
    alt: "Bizna Dashboard",
    title: "Bizna Dashboard",
    description: "A dashboard application for managing business analytics and insights from their clients while selling digital goods conveniently.",
  },
  {
    href: "https://www.github.com/ramo-dev",
    src: "/projects/Tees&Stuffs.png",
    alt: "Tees & Stuffs",
    title: "Tees & Stuffs",
    description: "An e-commerce store specializing in selling T-shirts and related merchandise. Built with NextJs, Shadcn, Prisma, MongoDB, and NextAuth.",
  },
  {
    href: "https://www.annuar.site",
    src: "/projects/Portfolio.png",
    alt: "Annuar Ndung'u",
    title: "Annuar Ndung'u",
    description: "This is a custom made portfolio built using next, framer, shadcn and tailwind",
  },
  {
    href: "https://www.github.com/ramo-dev/brightspend",
    src: "/projects/BrightspendLandingPage.png",
    alt: "BrightSpend Landing Page",
    title: "BrightSpend Landing Page",
    description: "The landing page for BrightSpend, an AI-powered financial education platform built with material tailwind, react and zustand for state management.",
  },


];

const Projects = () => {
  return (
    <div>
      <h1 className="leading font-bold text-3xl mt-14">My Latest Projects</h1>
      <p className="text-lg my-5">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my latest.</p>
      <BentoGrid className="mx-auto my-5">
        {projects.map((project, index) => {
          let colSpanClass = "md:col-span-1"; // Default

          if (index % 2 === 0) {
            colSpanClass = "md:col-span-2"; // Even index
          }
          if (index === 0) {
            colSpanClass = "md:col-span-1"
          }

          if (index === 1) {
            colSpanClass = "md:col-span-2"
          }

          if (index === 4) {
            colSpanClass = "md:col-span-3"; // Special case for index 4
          }

          return (
            <BentoGridItem
              key={index}
              title={project.title}
              description={project.description}
              href={project.href}
              image={project.src}
              colSpan={colSpanClass} // Pass the class here
            />
          );
        })}
      </BentoGrid>
      <a href="https://www.github.com/ramo-dev" className="hover:animate-pulse text-blue-500 dark:hover:text-blue-500/70 flex items-center gap-1">
        Explore other Projects <ExternalLinkIcon className="h-5" />
      </a>
    </div>
  );
};

export default Projects;

