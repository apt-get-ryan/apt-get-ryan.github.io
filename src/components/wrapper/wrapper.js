"use client"
import React from 'react'
import { useMenuStore } from '@/stores/menu'
import { mergeClassNames } from '@/utils/common';

export const Wrapper = ({children}) => {
  const { isOpen, open, close} = useMenuStore();

  return (
    <div className={mergeClassNames("min-h-dvh grid grid-rows-[auto_1fr_auto] bg-slate-50 transition-transform duration-500", isOpen && "scale-75 -translate-x-[490px] rounded-2xl")}>
      {children}
    </div>
  )
}
