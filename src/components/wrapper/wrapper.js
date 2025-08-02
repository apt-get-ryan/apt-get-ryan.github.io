"use client"
import React from 'react'
import { useMenuStore } from '@/stores/menu'
import { mergeClassNames } from '@/utils/common';

export const Wrapper = ({children}) => {
  const { isOpen } = useMenuStore();
  
  return (                                 
    <div className={mergeClassNames("min-h-dvh text-xl grid grid-rows-[auto_1fr_auto] bg-lit transition-transform ease-in-out max-h-screen overflow-auto origin-center duration-500", isOpen && " scale-75 -translate-x-[490px] max-h-screen !overflow-hidden rounded-2xl")}>
      {children}
    </div>
  )
}
