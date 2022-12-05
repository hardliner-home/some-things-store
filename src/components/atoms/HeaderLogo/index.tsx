import React from 'react'

import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

// src
const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  flex: 1;
`

export default function HeaderLogo() {

  return (
    <LogoContainer>
      <Typography fontSize={20} fontWeight={300}>Some</Typography>
      <Typography fontSize={20} fontWeight={700}>Things</Typography>
      &nbsp;
      <Typography fontSize={10} fontWeight={400} color="primary">store</Typography>
    </LogoContainer>
  )
}
