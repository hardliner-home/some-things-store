import React, { useContext } from 'react'

import Image from 'next/image'
import {
  Box,
  Button,
  AppBar,
  Container,
  OutlinedInput,
  Toolbar,
  Switch,
  Typography,
} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { styled } from '@mui/material/styles'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

// src
import { ThemeContext } from '../../../providers/ThemeContextProvider'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

interface HeaderProps {
  window?: () => Window;
}

export default function Header({ window }: HeaderProps): JSX.Element {
  const { themeMode, toggleTheme } = useContext(ThemeContext)

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        elevation={trigger ? 4 : 0}
        color="inherit"
      >
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Image
              src="/logo-brand.png"
              alt="Logo Brand"
              width={100}
              height={30}
            />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1 ,
                marginLeft: 4,
                marginRight: 4,
              }}
            >
              <OutlinedInput
                size="small"
                fullWidth
                placeholder="Find something..."
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0.5,
                  borderRadius: 6
                }}
                startAdornment={
                  <SearchRoundedIcon
                    fontSize="small"
                    sx={{
                      marginLeft: 1,
                      marginRight: 1,
                    }}
                  />
                }
                endAdornment={
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{
                      marginLeft: 2,
                      borderRadius: 6
                    }}
                  >
                    Search
                  </Button>
                }
              />
            </Box>

            <Typography>Dark Mode</Typography>
            <Switch
              size="small"
              checked={themeMode === 'dark'}
              onChange={toggleTheme}
              inputProps={{ 'aria-label': 'controlled' }}
            />

          </Container>
        </Toolbar>
      </AppBar>
      <Offset/>
    </>
  )
}
