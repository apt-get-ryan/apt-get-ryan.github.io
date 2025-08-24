"use client";
import React, { useEffect, useState } from 'react';
import { Popover } from 'radix-ui';
import { BsCircleHalf, BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { mergeClassNames } from '@/utils/common';

function ThemeButton() {
  const { theme, setTheme } = useTheme();

  let icon = null;

  if( theme == "dark") {
    icon = <BsMoonStarsFill/>
  } else if ( theme == "light") {
    icon = <BsSunFill/>
  } else {
    icon = <BsCircleHalf/>
  }
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button suppressHydrationWarning className='inline-flex gap-x-2 justify-center items-center'>
          {icon} Selecionar tema
        </button>

      </Popover.Trigger>
      <Popover.Content
       side='top' 
       align='start' 
       sideOffset={8}
       alignOffset={0}
       className={mergeClassNames(
        'p-2 gap-y-1 flex flex-col  rounded-lg',
        "shadow-lg border-1 border-slate-400",
        "bg-lit dark:bg-dim "
       )}
      >
        <button className='min-w-44 flex items-center justify-center gap-2' onClick={() => setTheme("light")} ><BsSunFill/> Claro</button>
        <button className='min-w-44 flex items-center justify-center gap-2' onClick={() => setTheme("dark")}><BsMoonStarsFill/> Escuro</button>
        <button className='min-w-44 flex items-center justify-center gap-2' onClick={() => setTheme("system")}><BsCircleHalf/> Automático</button>
        {/* <Popover.Arrow className="fill-slate-200 dark:fill-slate-900" /> */}
      </Popover.Content>
    </Popover.Root>
  )
}

export default ThemeButton;