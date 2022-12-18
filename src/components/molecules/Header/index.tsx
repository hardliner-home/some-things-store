import React from 'react'

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

interface HeaderProps {
  window?: () => Window;
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export default function Header({ window }: HeaderProps): JSX.Element {

  return (
    <>
      <AppBar
        color="inherit"
        position="fixed"
        component="header"
        elevation={0}
        sx={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'lightgrey'
        }}
      >
        <Toolbar
          // maxWidth={false}
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
