import React, { useContext } from 'react'

import { Switch, Typography } from '@mui/material'

// src
import { ThemeContext } from '../../../providers/ThemeContextProvider'

export default function DarkModeSwitch() {
  const { themeMode, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Typography>Dark Mode</Typography>
      <Switch
        size="small"
        checked={themeMode === 'dark'}
        onChange={toggleTheme}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </>
  )
}
