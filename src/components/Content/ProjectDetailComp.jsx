import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsItms } from "./ProjectItem";
import { Image, Skeleton, Tooltip } from "antd";
import {Link} from "react-router-dom"
import { ThemeContext } from "@/Hooks/Theme";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectDetailComp = () => {
  const { id } = useParams();
  const project = projectsItms.find((item) => item.id.toString() === id);
  const [isLoading, setIsLoading] = useState(true);
  const [tooltip, setTooltip] = useState(false);

  const { isDark } = useContext(ThemeContext);
  const text = isDark ? "text-black" : "text-white";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTooltip(true);
    const timer = setTimeout(() => {
      setTooltip(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return project ? (
    isLoading ? (
      <Skeleton
        className={`min-h-44 mt-3 ${
          isDark ? "bg-zinc-800" : "bg-zinc-200"
        } p-4 rounded-lg`}
      />
    ) : (
      <div key={project.id} className="flex flex-col mt-3">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title}</title>
        </Helmet>
        <Tooltip
          title="click here to preview image"
          open={project.Tooltip ? tooltip : false}
        >
          <LazyLoadComponent>
            {" "}
            <Image src={project.image} alt={project.alt} />
          </LazyLoadComponent>
        </Tooltip>
        <h1 className="text-xl font-bold my-3">{project.title}</h1>
        <p className="my-2  ">{project.description}</p>
       
<Link to={project.sourceCode || project.website || ""} className="w-full">
  <button
    className={`mt-3 p-3 ${isDark ? "bg-zinc-200" : "bg-zinc-700"} ${text} hover:bg-opacity-80`}
  >
    {project.sourceCode ? "Source Code" : project.website ? "Visit Website" : "To be updated, stay tuned"}
  </button>
</Link>


        </div>
    )
  ) : (
    <p>No items Found</p>
  );
};

export default ProjectDetailComp;
