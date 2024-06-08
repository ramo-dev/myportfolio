import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsItms } from "./ProjectItem";
import { Image, Skeleton } from "antd";
import { ThemeContext } from "@/Hooks/Theme";
import { Helmet } from "react-helmet";

const ProjectDetailComp = () => {
  const { id } = useParams();
  const project = projectsItms.find((item) => item.id.toString() === id);
  const [isLoading, setIsLoading] = useState(true);

  const { isDark } = useContext(ThemeContext);
  const text = isDark ? "text-black" : "text-white";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return project ? (
    isLoading ? (
      <Skeleton className={`min-h-44 mt-3 ${isDark ? "bg-zinc-800" : "bg-zinc-200"} p-4 rounded-lg`} />
    ) : (
      <div key={project.id} className="flex flex-col mt-3">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title}</title>
        </Helmet>
        <Image src={project.image} alt={project.alt} className="" />
        <h1 className="text-xl font-bold my-3">{project.title}</h1>
        <p className="my-2  ">{project.description}</p>
        <button
          className={`mt-3 p-3 ${
            isDark ? "bg-zinc-200" : "bg-zinc-700"
          } ${text} hover:bg-opacity-80`}
        >
          Visit
        </button>
      </div>
    )
  ) : (
    <p>No items Found</p>
  );
};

export default ProjectDetailComp;
