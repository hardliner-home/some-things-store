import React from 'react'

import Image from 'next/image'
import {
  AppBar,
  Container,
  Toolbar,
} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { styled } from '@mui/material/styles'

// src
import DarkModeSwitch from '../../atoms/DarkModeSwitch'
import HeaderSearchLine from '../../atoms/HeaderSearchLine'
import HeaderUser from '../HeaderUser'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`

interface HeaderProps {
  window?: () => Window;
}

export default function Header({ window }: HeaderProps): JSX.Element {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return (
    <>
      <AppBar
        color="inherit"
        position="fixed"
        component="header"
        elevation={trigger ? 4 : 0}
      >
        <Toolbar>
          <HeaderContainer>
            <Image
              width={100}
              height={30}
              alt="Logo Brand"
              src="/logo-brand.png"
            />
            <HeaderSearchLine />
            {/*<DarkModeSwitch />*/}
            <HeaderUser />
          </HeaderContainer>
        </Toolbar>
      </AppBar>
      <Offset/>
    </>
  )
}
