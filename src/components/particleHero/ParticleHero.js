"use client";
import React, { useEffect } from 'react';
import ParticleBackground from './ParticleBackground/ParticleBackground.js'  
import { FaFile, FaGithub } from 'react-icons/fa6'
import { StyledButton } from '@/components/StyledButton/StyledButton'
import { mergeClassNames } from '@/utils/common.js';


function ParticleHero() {
  useEffect(() => {

  }, [])
  return (
    <div className='relative overflow-hidden'>
        <ParticleBackground/>
        <div className="absolute left-0 top-0 flex w-full h-full justify-center items-center ">
            <div className='px-6 container max-w-(--breakpoint-xl) flex justify-center items-center flex-col gap-2'>
                <h1 className='text-2xl md:text-3xl font-bold'>Ryan Guimarães</h1>
                <h2 className="text-3xl md:text-4xl font-black text-center max-w-[25ch] break-words">
                  <span>Desenvolvedor full stack</span>
                  <span className='text-blue-600'> React</span>,
                  <span className='text-green-600'> Node.js</span>, 
                  <span> Técnico e Designer</span>
                </h2>
                <div className={mergeClassNames(
                  "flex gap-1 justify-center",
                  "items-center flex-wrap"
                )}>
                  <StyledButton target="_blank" href="https://drive.google.com/file/d/13sUeMy9wkHxUlrVHAsb7f4ORF_ULNiCP/view?usp=sharing" variant="blue" className={"grow inline-block"}>
                    <div className='flex gap-1 items-center justify-center'>
                      <FaFile className='inline align-middle'/> Currículo
                    </div>
                  </StyledButton>
                  <StyledButton target="_blank" href="https://github.com/apt-get-ryan" variant="black" className={"grow inline-block"}>
                    <div className='flex gap-1 items-center justify-center whitespace-nowrap'>
                      <FaGithub className='inline align-middle'/> Meu GitHub
                    </div>
                  </StyledButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ParticleHero