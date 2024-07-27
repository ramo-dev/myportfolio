
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface BadgeProps {
  skillType: string;
}

const Badges: FC<BadgeProps> = ({ skillType }) => {
  return (
    <Badge>
      {skillType}
    </Badge>
  );
};

interface Skill {
  skillType: string;
}

const skills: Skill[] = [
  { skillType: "React" },
  { skillType: "NextJs" },
  { skillType: "TailwindCSS" },
  { skillType: "Nodejs" },
  { skillType: "Typescript" },
  { skillType: "Python" },
  { skillType: "AntDesign" },
  { skillType: "Bash" },
  { skillType: "Expressjs" },
  { skillType: "FastAPI" },
  { skillType: "Firebase" }
];

const Skills: FC = () => {
  return (
    <div className="md:mt-20 mt-7 h-[10rem]">
      <h1 className="leading font-bold text-3xl my-5">Skills</h1>
      <div className="flex gap-4 flex-wrap my-3">
        {skills.map((skill, index) => (
          <Badges key={index} skillType={skill.skillType} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

