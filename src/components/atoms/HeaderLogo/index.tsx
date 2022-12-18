import React from 'react'

import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

// src
const LogoContainer = styled('div')`
  display: flex;
  flex: 1;
`

const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: inherit;
`

export default function HeaderLogo() {

  return (
    <LogoContainer>
      <LogoLink href="/" passHref>
        <Typography fontSize={20} fontWeight={300}>Some</Typography>
        <Typography fontSize={20} fontWeight={700}>Things</Typography>
        &nbsp;
        <Typography fontSize={10} fontWeight={400} color="primary">store</Typography>
      </LogoLink>
    </LogoContainer>
  )
}
