import React from 'react';
import { Popover } from 'radix-ui';
import { BsCircleHalf, BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  let icon = <BsCircleHalf/>;
  if( theme == "dark") {
    icon = <BsMoonStarsFill/>
  } else if ( theme == "light") {
    icon = <BsSunFill/>
  }
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='inline-flex gap-x-2 justify-center items-center'>
          {icon} Selecionar tema
        </button>

      </Popover.Trigger>
      <Popover.Content side='top' align='center' className='p-1 flex flex-col shadow-lg bg-slate-200 dark:bg-slate-900 shadow-sm rounded'>
        <button className='min-w-44 flex items-center justify-center gap-2' onClick={() => setTheme("light")} ><BsSunFill/> Claro</button>
        <button className='min-w-44 flex items-center justify-center gap-2' onClick={() => setTheme("dark")}><BsMoonStarsFill/> Escuro</button>
        <button className='min-w-44 flex items-center justify-center gap-2' onClick={() => setTheme("system")}><BsCircleHalf/> Automático</button>
        <Popover.Arrow className="fill-slate-200 dark:fill-slate-900" />
      </Popover.Content>
    </Popover.Root>
  )
}

export default ThemeButton;