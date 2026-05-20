import { ContentBox } from '@/components/ContentBox/ContentBox';
import { FaUserGear } from "react-icons/fa6";
import React from 'react'
import { mergeClassNames } from '@/utils/common';
const Pill = ({children, className}) => {
  return (
    <div className={mergeClassNames(
      "rounded-md",
      "text-center",
      "text-shadow-xs text-shadow-slate-600",
      className
    )}>
      {children}
    </div>
  )
}
const Habilidades = () => {
  const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "JQuery",
    "React",
    "Next.js",
    "Zustand",
    "Tailwind CSS",
    "Daisy UI",
    "Mantine UI",
    "UI/UX"
  ];
  const backendSkills = [
    "PHP",
    "C#",
    "ASP.NET MVC",
    "Java",
    "Node.js",
    "Express",
    "Sequelize",
    "Mongoose",
    "JWT",
    "OracleSQL",
    "MySQL",
    "MongoDB"
  ];
  const otherSkills = [
    "Git",
    "Photoshop",
    "Canva",
    "Figma",
    "UML",
  ];

  return (
    <div className='mx-auto container max-w-(--breakpoint-xl) px-6 my-4'>
      <span className="flex items-center text-2xl px-1 my-4 font-medium">
        <FaUserGear/>&nbsp;Habilidades
      </span>
      <ContentBox>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {frontendSkills.map( (skill, index) => <Pill className={"bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20 transition-all"} key={index}>{skill}</Pill>)}
          {backendSkills.map( (skill, index) => <Pill className={"bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 border border-violet-500/20 transition-all"} key={index}>{skill}</Pill>)}
          {otherSkills.map( (skill, index) => <Pill className={"bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all"} key={index}>{skill}</Pill>)}
        </div>
      </ContentBox>
    </div>
  )
}

export default Habilidades;