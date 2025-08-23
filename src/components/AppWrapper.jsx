import React from 'react';
import { ThemeProvider } from 'next-themes';

const AppWrapper = ({children, ...props}) => {
  return (
    <div {...props} >
      <ThemeProvider
        attribute="data-theme"
        defaultTheme='system'
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
    </div>
  )
}

export default AppWrapper