import useScrollTrigger from '@mui/material/useScrollTrigger'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import OutlinedInput from '@mui/material/OutlinedInput'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Box, Button } from '@mui/material'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

interface HeaderProps {
  window?: () => Window;
}

export default function Header(props: HeaderProps): JSX.Element {
  const { window } = props

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
          <Container sx={{ display: 'flex', alignItems: 'center'  }}>
            <Image
              src="/logo-brand.png"
              alt="Logo Brand"
              width={100}
              height={30}
            />

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <OutlinedInput
                size="small"
                fullWidth
                placeholder="Find something..."
                startAdornment={<SearchRoundedIcon fontSize="small"/>}
              />
              <Button
                // size="small"
                variant="contained"
              >
                Search
              </Button>
            </Box>

          </Container>
        </Toolbar>
      </AppBar>
      <Offset/>
    </>
  )
}
