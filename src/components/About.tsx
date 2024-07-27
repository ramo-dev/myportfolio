
import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface UserDetails {
  name: string;
  role: string;
  company: string;
  description: string;
  blogArticles: {
    href: string;
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
}


//Add or remove this
const userDetails: UserDetails = {
  name: "Annuar",
  role: "frontend developer",
  company: "Space ya Tech",
  description: "I am currently work at Space ya Tech, where I help develop web apps. SYT is an open-source web platform for the youths built with.",
  blogArticles: [
    {
      href: "https://blog.annuar.site/how-to-stay-focused-while-programming-top-strategies",
      src: "https://blog.annuar.site/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fstock%2Funsplash%2FBTzLUhq4z0U%2Fupload%2Fa04430bb4c712e353663957504e5cda2.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
      alt: "How to Stay Focused While Programming: Top Strategies",
      title: "How to Stay Focused While Programming: Top Strategies",
      description: "In the fast-paced world of software development, efficiency and focus are paramount. Microtasking, a strategy that breaks down larger tasks into smaller, manageable units, has emerged as a powerful technique to enhance productivity and streamline workflow. Here’s how microtasking can benefit developers",
    },
    {
      href: "https://blog.annuar.site/bridging-the-skill-gap-in-kenya-challenges-and-solutions",
      src: "https://blog.annuar.site/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1720300134433%2Ff92a5be8-5cbd-40da-9ff3-137e8f2f016b.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
      alt: "Bridging the Skill Gap in Kenya: Challenges and Solutions",
      title: "Bridging the Skill Gap in Kenya: Challenges and Solutions",
      description: "Kenya, a growing center of innovation and tech in East Africa, has an important challenge: the skill gap. This gap between what employers need and what job seekers have is a big hurdle for economic growth. Bridging this gap is key to unlocking the potential of Kenya’s youth and ensuring long-term economic progress.",
    },
  ],
};

const About: FC = () => {
  return (
    <div id="about">
      <h1 className="leading font-bold text-3xl my-4">About Me</h1>

      <div className="md:text-lg text-md my-6">
        Hey, I'm {userDetails.name} 👋, a {userDetails.role}, optimist, and community builder. {userDetails.description}
        <Badge variant="secondary">React</Badge>
      </div>
      <p className="md:text-lg text-md">
        Throughout the years, I've shared content on my blog, striving for simplicity. You'll discover articles about the technologies that capture my interest, insights into my career growth, and the knowledge I've gained along the way.{" "}
      </p>

      <div className="flex flex-wrap gap-4 my-8 md:mt-14 mt-7">
        {userDetails.blogArticles.map((article, index) => (
          <a
            key={index}
            href={article.href}
            className="flex flex-col min-w-[250px] h-84 p-3 flex-1 w-full md:w-1/2 rounded-lg text-foreground border bg-transparent"
          >
            <img
              src={article.src}
              alt={article.alt}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col pt-3">
              <h1 className="md:text-xl text-lg font-bold text-foreground-background hover:text-blue-600 dark:hover:text-blue-500/70 mb-2">
                {article.title}
              </h1>
              <p className="md:text-lg text-md text-foreground-background line-clamp-3">
                {article.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://blog.annuar.site"
        className="hover:animate-pulse text-blue-500 dark:hover:text-blue-500/70 flex items-center gap-1"
      >
        Explore articles{" "}
        <ExternalLink className="h-5" />
      </a>
    </div>
  );
};

export default About;

