import React, { useContext } from 'react'

import Image from 'next/image'
// import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Button, ButtonBase, Typography } from '@mui/material'

// src
import { AuthContext } from '../../../providers/AuthContextProvider'

const Container = styled('div')`
  display: flex;
  align-items: center;
`

export default function HeaderUser() {
  const { auth } = useContext(AuthContext)

  return (
    <Container>
      {auth.isSignedIn && (
        <ButtonBase>
          <Image
            src={auth.user.profilePic}
            alt={auth.user.firstName}
          />
          <Typography>{ auth.user.firstName }</Typography>
        </ButtonBase>
      )}

      {!auth.isSignedIn && (
        <>
          <Button
            // variant="outlined"
            // component={Link}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            // component={Link}
          >
            Sign Up
          </Button>
        </>
      )}
    </Container>
  )
}
