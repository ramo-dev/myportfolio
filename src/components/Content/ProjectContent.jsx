import { Flex, Image, Skeleton } from "antd";
import { useContext, useEffect, useState } from "react";
import { projectsItms } from "./ProjectItem";
import { ThemeContext } from "@/Hooks/Theme";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectContent = () => {
  
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [loadmore, setIsLoadingMore] = useState(false);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);



  const handleReadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 3);
      setIsLoadingMore(false);
    }, 1000);
  };

  return (
    <div>
      {isLoading ? (
        <Flex vertical gap="1rem">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              active
              className={`${
                isDark ?  "bg-zinc-800" : "bg-zinc-200"
              } min-h-44 min-w-full md:w-5/12 p-3 rounded-lg mt-3`}
            />
          ))}
        </Flex>
      ) : (
        <Flex vertical gap="1rem">
          {projectsItms.slice(0, visibleCount).map((item) => (
            <Flex
              key={item.id}
              gap="1rem"
              className="md:flex-row flex-col mt-5  md:py-3 pb-5 rounded-lg border-zinc-700 border-dashed hover:scale-[1.01] transition"
            >
             
                <div className="rounded-lg md:w-6/12 w-full">
                <LazyLoadImage
                alt={item.description}
                effect="blur"
                placeholderSrc = {item.image}
                src={item.image}
                afterLoad={()=>(
                  <Image
                  src={item.image}
                  alt={item.alt}
                  className="rounded-lg min-h-48 object-cover "
                />
                )}
                />
                 
                </div>
              
              <Flex
                className="w-full gap-5 md:w-5/12"
                vertical
                justify="space-around"
              >
                <h1 className="md:text-3xl text-lg font-bold">{item.title}</h1>
                <p className="text-wrap md:text-lg text-sm">
                  {item.description}
                </p>
                <Link to={`/projects/${item.id}`}>
                <button className={` hover:text-zinc-400 transition hover:bg-zinc-500 px-4 py-2 w-full bg-transparent border border-dashed rounded-lg border-zinc-500`}>
                  Preview
                </button></Link>
              </Flex>
            </Flex>
          ))}
          {visibleCount < projectsItms.length &&
            (loadmore ? (
              <Skeleton
                active
                className={`${
                  isDark ?  "bg-zinc-800" : "bg-zinc-200"
                } min-h-44 min-w-full md:w-5/12 p-3 rounded-lg mt-2`}
              />
            ) : (
              <button
                onClick={handleReadMore}
                className="transition font-bold hover:bg-zinc-500 px-4 py-2 w-full bg-transparent border border-dashed rounded-lg border-zinc-500 mt-4"
              >
                Load More
              </button>
            ))}
        </Flex>
      )}
    </div>
  );
};

export default ProjectContent;
