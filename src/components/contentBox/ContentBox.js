import { mergeClassNames } from '@/utils/common'
import React from 'react'

export const ContentBox = ({children, className}) => {
  return (
    <section className={mergeClassNames(
      'p-4 shadow-md w-full bg-[#e4e5e7] rounded-2xl',
      className
    )}>
        {children}
    </section>
  )
}
