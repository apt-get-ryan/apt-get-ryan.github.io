"use client";
import React, { useEffect } from 'react';
import ParticleBackground from './particleBackground/ParticleBackground'
import { FaFile, FaGithub } from 'react-icons/fa6'
import { StyledButton } from '../styledButton/StyledButton'


function ParticleHero() {
  useEffect(() => {

  }, [])
  return (
    <div className='relative overflow-hidden'>
        <ParticleBackground/>
        <div className="absolute left-0 top-0 flex w-full h-full justify-center items-center ">
            <div className='px-6 container max-w-screen-xl text-center'>
                <h1 className='text-[calc(1.2rem+1.5vw)] font-semibold inline-block mb-4'>Ryan Guimarães</h1><br/>
                <h2 className="text-[calc(2rem+1.5vw)] font-black inline">Desenvolvedor <span className='text-blue-600'>React</span>,<br/>Técnico e Designer</h2>
                <br />
                <StyledButton target="_blank" download href="https://drive.google.com/file/d/1AK5BSBFU2LQczaZtUExpj2urxKq5dxRQ/view?usp=sharing" variant="blue" className={"mt-4 ml-1 inline-block"}>
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