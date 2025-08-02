import { mergeClassNames } from '@/utils/common';
import React from 'react'

export const StyledButton = ({children, className, variant, href, ...props}) => {
  let dynamicStyles = "";
  switch(variant) {
    case 'blue':
      dynamicStyles = "bg-blue-600 border-blue-700 text-white";
      break;
    case 'red':
      dynamicStyles = "bg-red-500 border-red-600 text-white";
      break;
    case 'purple':
      dynamicStyles = "bg-purple-500 border-purple-600 text-white";
      break;
    case 'black':
      dynamicStyles = "bg-slate-600 border-slate-700 text-white";
      break;
    default:
      dynamicStyles = "bg-stone-500 border-stone-600 text-white";
      break;
  }

  return (
    href ? 
    <a {...props} href={href} style={{appearance: "button"}} className={mergeClassNames(
      "block w-fit px-6 py-2 rounded-lg cursor-pointer outline-transparent",
      "hover:brightness-110 hover:-translate-y-px border-b-4 active:brightness-110 active:border-b-2",
      className,
      dynamicStyles,
    )}>
      {children}
    </a>
     :
    <button {...props} className={mergeClassNames(
      "block px-6 py-2 rounded-lg cursor-pointer outline-transparent",
      "hover:brightness-110 hover:-translate-y-px border-b-4 active:brightness-110 active:border-b-2",
      className,
      dynamicStyles,
    )}>
      {children}
    </button>
  )
}
