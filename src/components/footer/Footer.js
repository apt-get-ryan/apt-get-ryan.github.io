'use client';

import React from 'react';
import { FaFile, FaWhatsapp, FaGithub } from 'react-icons/fa6';
import { StyledButton } from '../StyledButton/StyledButton';

const GmailIcon = () => {
  return (
    <img src='/gmail.svg' className='h-[1em] w-auto align-middle inline'/>
  )
}

export const Footer = () => {
  return (
    <footer className={
      "bg-[#e7e7e7] dark:bg-dim-header shadow-lg shadow-black"
      }>
      <div className="container max-w-(--breakpoint-xl) grid grid-cols-12 gap-x-6 gap-y-2 mx-auto py-8 px-6">
        <div className='col-span-12 md:col-span-8'>
          <img src="/logo.svg" className=' mr-4 h-10 w-10 inline' />
          <span className='text-lg font-medium'>
          Ryan Guimarães
          </span>
          <p className='mb-2 mt-4 text-justify'>Agradeço ao meu irmão por despertar em mim o interesse por TI, aos meus pais por sempre terem me apoiado, e aos meus professores por terem me ensinado.</p>
          <div>
            <a target='_blank' href='mailto:ryan.guimar10@gmail.com' className='block'><GmailIcon/> ryan.guimar10@gmail.com</a>
            <a target='_blank' href="http://wa.me/5514991314167" className='block text-green-500'><FaWhatsapp className='inline'/> <span className='text-sm'>(14)</span> 99131-4167</a>
          </div>
        
        </div>

        <div className='row-span-2 col-span-12 md:col-span-4 md:flex md:flex-col justify-center items-start py-6 grid-row'>
          <StyledButton target="_blank" href="https://drive.google.com/file/d/1AK5BSBFU2LQczaZtUExpj2urxKq5dxRQ/view?usp=sharing" variant="blue" className={"mt-4 ml-1 inline-block w-full"}>
            <div className='flex gap-1 items-center justify-center'>
              <FaFile className='inline align-middle'/> Currículo
            </div>
          </StyledButton>
          <StyledButton target="_blank" href="https://github.com/apt-get-ryan" variant="black" className={"mt-4 ml-1 inline-block w-full"}>
            <div className='flex gap-1 items-center justify-center'>
              <FaGithub className='inline align-middle'/> Meu GitHub
            </div>
          </StyledButton>
        </div>

      </div>
    </footer>
  )
}