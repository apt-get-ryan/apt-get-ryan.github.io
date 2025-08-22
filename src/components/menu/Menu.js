"use client"
import MenuCloseButton from './MenuCloseButton'
import { useMenuStore } from '@/stores/menu';
import { mergeClassNames } from '@/utils/common';
import { useEffect, useRef } from 'react';
import { FaCode, FaPalette, FaUserGear } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { FocusTrap } from 'focus-trap-react';
function Overlay({onClose, isOpen}) {
    return (
        <div role="presentation" aria-hidden={!isOpen} className={mergeClassNames('h-full w-full absolute z-10 hidden', isOpen && "!block")} onClick={onClose}></div>
    )
}
 
const menuItems = [
    { label: "Home", href: "/", icon: <FaCode size={20}/> },
    { label: "Design", href: "/Design", icon: <FaPalette size={20}/> },
    { label: "Habilidades", href: "/Habilidades", icon: <FaUserGear size={20}/>}
]
function Menu() {
    const navRef = useRef();
    const pathName = usePathname();
    const { isOpen, open, close} = useMenuStore();
    useEffect(()=> {
        if(isOpen === true) {
            navRef.current.focus();
            const escCatch = (event) => {
                if(event.key === "Escape"){
                    close();
                }
            }
            window.addEventListener("keydown", escCatch);
            return () => { window.removeEventListener("keydown", escCatch) };
        }

        
    }, [isOpen])
    return (
        <>
          <FocusTrap active={isOpen}>
            <div>
              <nav tabIndex="-1" ref={navRef} className={mergeClassNames("bg-slate-100 fixed outline-none h-dvh w-full max-w-[400px] right-0 p-4 transition-transform translate-x-full z-20 duration-500", isOpen && "!translate-x-0",
                  "grid grid-rows-[auto_auto_1fr_auto_auto]"
              )}>
                  <div className="flex justify-end items-center">
                      <MenuCloseButton/>
                  </div>
                  <hr className='h-px my-4 border-gray-400/75'/>
                  <div className='overflow-auto'>
                      <ul className=''>
                          {menuItems.map((menuItem, itemIndex) => 
                              <li key={itemIndex} className={`py-2 px-4 text-opacity-70 hover:text-opacity-100 text-slate-950 text-lg ${ pathName === menuItem.href && " text-opacity-100 pointer-events-none !text-blue-600"}`}>
                                  <a href={menuItem.href} className="flex gap-2 items-center">
                                      {menuItem.icon} {menuItem.label}
                                  </a>
                              </li>
                          )}
                      </ul>

                  </div>
              </nav>
              <Overlay onClose={close} isOpen={isOpen}/>
            </div>
          </FocusTrap>
        </>
    )
}

export default Menu