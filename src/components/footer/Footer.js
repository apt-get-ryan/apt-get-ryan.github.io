'use client';

import React from 'react';
import { FaEnvelope, FaMailchimp, FaWhatsapp } from 'react-icons/fa6';
import { StyledButton } from '../styledButton/StyledButton';

const GmailIcon = () => {
  return (
    <img src='/gmail.svg' className='h-[1em] w-auto align-middle inline'/>
  )
}

export const Footer = () => {
  return (
    <footer className={
      "bg-[#e7e7e7] shadow-lg shadow-black"
      }>
      <div className="container grid grid-cols-12 gap-x-6 gap-y-4 mx-auto py-8 px-6">
        <div className='col-span-8'>
          <img src="/logo.svg" className=' mr-4 h-10 w-10 inline' />
          <span className='text-lg font-medium'>
          Ryan Guimarães
          </span>
          <p className='mb-2 mt-4 text-justify'>Agradeço ao meu irmão por despertar em mim o interesse por TI, aos meus pais por sempre terem me apoiado, e aos meus professores por terem me ensinado.</p>
          <div>
            <a className='block'><GmailIcon/> ryan.guimar10@gmail.com</a>
            <a className='block text-green-500'><FaWhatsapp className='inline'/> (14) 99131-4167</a>
          </div>
        
        </div>

        <div className='row-span-2 col-span-4 flex justify-center items-start pt-6'>
          <ul>
            <li>
              <a href="" className='pointer text-center underline mb-2'>Currículo</a>
            </li>
            <li>
              <a href="" className='pointer text-center underline mb-2'>GitHub</a>
            </li>
          </ul>
        </div>

        <div className='col-span-8'>
        </div>

      </div>
    </footer>
  )
}