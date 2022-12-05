import React from 'react'

import Image from 'next/image'
import {
  AppBar,
  Container,
  Toolbar,
} from '@mui/material'
import { styled } from '@mui/material/styles'

// src
import HeaderSearchLine from '../../atoms/HeaderSearchLine'
import HeaderLogo from '../../atoms/HeaderLogo'
import HeaderUser from '../HeaderUser'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

interface HeaderProps {
  window?: () => Window;
}

export default function Header({ window }: HeaderProps): JSX.Element {

  return (
    <>
      <AppBar
        color="inherit"
        position="fixed"
        component="header"
      >
        <Toolbar
          maxWidth={false}
          component={Container}
        >
          <HeaderLogo />
          <HeaderSearchLine />
          <HeaderUser />
        </Toolbar>
      </AppBar>
      <Offset/>
    </>
  )
}
