"use client"
import MenuCloseButton from './MenuCloseButton'
import { useMenuStore } from '@/stores/menu';
import { mergeClassNames } from '@/utils/common';
import { useEffect, useRef } from 'react';

function Overlay({onClose, isOpen}) {
    return (
        <div className={mergeClassNames('h-full w-full absolute z-10 hidden', isOpen && "!block")} onClick={onClose}></div>
    )
}

function Menu() {
    const navRef = useRef();
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
            <nav tabIndex="-1" ref={navRef} className={mergeClassNames("bg-slate-100 fixed outline-none h-dvh w-[400px] right-0 p-4 transition-transform translate-x-full z-20 duration-500", isOpen && "!translate-x-0",
                "grid grid-rows-[auto_auto_1fr_auto_auto]"
            )}>
                <div className="flex justify-end items-center">
                    <MenuCloseButton/>
                </div>
                <hr className='h-px my-4 border-gray-400/75'/>
                <div className='overflow-auto'>
                    <ul className='parei aqui'>
                        
                    </ul>

                </div>
            </nav>
            <Overlay onClose={close} isOpen={isOpen}/>
        </>
    )
}

export default Menu