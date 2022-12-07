import React, { useContext, useState } from 'react'

import { styled } from '@mui/material/styles'

// src
import { AuthContext } from '../../../providers/AuthContextProvider'
import AuthHeaderUser from '../AuthHeaderUser'
import AuthHeaderActions from '../AuthHeaderActions'
import { Button } from '@mui/material'
import Link from 'next/link'
import AuthModal from '../AuthModal'

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export default function HeaderUser() {
  const { auth } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onSignIn = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <Container>
      {!auth.isSignedIn && (
        <>
          <Button
            variant="contained"
            size="small"
            onClick={onSignIn}
          >
            Post an Advert
          </Button>
          <AuthModal open={isOpen} onClose={onClose} />
        </>
      )}

      {auth.isSignedIn && (
        <Button
          variant="contained"
          size="small"
          component={Link}
          href="/add-item"
        >
          Post an Advert
        </Button>
      )}

      {auth.isSignedIn
        ? <AuthHeaderUser user={auth.user} />
        : <AuthHeaderActions />
      }
    </Container>
  )
}
