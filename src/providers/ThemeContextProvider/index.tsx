import React, { ReactNode, createContext, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

// src
import theme from '../../theme'

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({})

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [themeMode, setThemeMode] = useState('light')

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
