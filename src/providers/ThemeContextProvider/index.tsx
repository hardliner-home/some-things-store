import React, { ReactNode, createContext, useState } from 'react'
// import CssBaseline from '@mui/material/CssBaseline'
// import { ThemeProvider } from '@mui/material/styles'

// src
import theme from '../../theme'


export const ThemeContext = createContext({})

export default function ThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light')

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {/*<ThemeProvider theme={theme}>*/}
        {/*<CssBaseline />*/}
        {children}
      {/*</ThemeProvider>*/}
    </ThemeContext.Provider>
  )
}
