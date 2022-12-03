import React, { ReactNode, createContext, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

// src
import theme from '../../theme'
import { ThemeType } from '../../types'

type InitialThemeContextType = {
  themeMode: ThemeType,
  toggleTheme: () => void
}

const initialThemeContext: InitialThemeContextType = {
  themeMode: 'light',
  toggleTheme: () => {}
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext(initialThemeContext)

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeType>('light')

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme(themeMode)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
