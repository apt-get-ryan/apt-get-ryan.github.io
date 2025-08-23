import { ContentBox } from '@/components/ContentBox/ContentBox';
import { FaUserGear } from "react-icons/fa6";
import React from 'react'

const Habilidades = () => {
  const skills = [
    "C#",
    "ASP.NET MVC",
    "Bootstrap",
    "React",
    "Next.JS",
    "Zustand",
    "TailwindCSS",
    "Oracle SQL",
    "Git",
    "Photoshop",
    "Canva",
    "Java",
    "UI/UX",
    "Figma",
    "UML",
    "Node.Js",
  ];
  return (
    <div className='mx-auto container max-w-(--breakpoint-xl) px-6 my-4'>
      <span className="flex items-center text-2xl px-1 my-4 font-medium">
        <FaUserGear/>&nbsp;Habilidades
      </span>
      <ContentBox>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {skills.map( (skill, index) => <div key={index} className='text-center rounded-md bg-lit/50 dark:bg-dim/50 dark:hover:bg-dim hover:bg-lit/75 border-transparent hover:shadow border-2'>{skill}</div>)}
        </div>
      </ContentBox>
    </div>
  )
}

export default Habilidades;