import React, { useContext } from 'react'

import { Switch, Typography } from '@mui/material'
import styled from '@emotion/styled'

// src
import { ThemeContext } from '../../../providers/ThemeContextProvider'

const SwitchContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default function DarkModeSwitch() {
  const { themeMode, toggleTheme } = useContext(ThemeContext)

  return (
    <SwitchContainer>
      <Typography>Dark Mode</Typography>
      <Switch
        size="small"
        checked={themeMode === 'dark'}
        onChange={toggleTheme}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </SwitchContainer>
  )
}
