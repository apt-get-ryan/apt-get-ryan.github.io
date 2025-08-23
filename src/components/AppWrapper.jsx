import React from 'react';
import { ThemeProvider } from 'next-themes';

const AppWrapper = ({children, ...props}) => {
  return (
    <div {...props} >
      {/* <ThemeProvider
        attribute="class"
        defaultTheme='system'
        enableSystem={true}
      > */}
        {children}
      {/* </ThemeProvider> */}
    </div>
  )
}

export default AppWrapper