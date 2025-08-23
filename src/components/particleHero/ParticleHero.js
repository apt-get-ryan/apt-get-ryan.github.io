"use client";
import React, { useEffect } from 'react';
import ParticleBackground from './ParticleBackground/ParticleBackground.js'  
import { FaFile, FaGithub } from 'react-icons/fa6'
import { StyledButton } from '@/components/StyledButton/StyledButton'


function ParticleHero() {
  useEffect(() => {

  }, [])
  return (
    <div className='relative overflow-hidden'>
        <ParticleBackground/>
        <div className="absolute left-0 top-0 flex w-full h-full justify-center items-center ">
            <div className='px-6 container max-w-(--breakpoint-xl) text-center'>
                <h1 className='text-2xl md:text-3xl font-bold inline-block mb-1'>Ryan Guimarães</h1><br/>
                <h2 className="text-3xl md:text-4xl font-black inline">Desenvolvedor <span className='text-blue-600'>React</span>,<br/>Técnico e Designer</h2>
                <br />
                <StyledButton target="_blank" href="https://drive.google.com/file/d/1AK5BSBFU2LQczaZtUExpj2urxKq5dxRQ/view?usp=sharing" variant="blue" className={"mt-4  inline-block"}>
                  <div className='flex gap-1 items-center justify-center'>
                    <FaFile className='inline align-middle'/> Currículo
                  </div>
                </StyledButton>
                <StyledButton target="_blank" href="https://github.com/apt-get-ryan" variant="black" className={"mt-4 ml-1 inline-block"}>
                  <div className='flex gap-1 items-center justify-center'>
                    <FaGithub className='inline align-middle'/> Meu GitHub
                  </div>
                </StyledButton>
            </div>
        </div>
    </div>
  )
}

export default ParticleHero