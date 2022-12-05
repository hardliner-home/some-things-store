import React, { useContext, useState } from 'react'

import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { Button, ButtonBase, Typography } from '@mui/material'

// src
import AuthModal from '../AuthModal'
import { AuthContext } from '../../../providers/AuthContextProvider'
import { AuthApiVariantType } from '../../../types'

const Container = styled('div')`
  display: flex;
  align-items: center;
`

const Avatar = styled(Image)`
  border-radius: 50%;
`

export default function HeaderUser() {
  const { auth } = useContext(AuthContext)
  const [authModalType, setAuthModalType] = useState<AuthApiVariantType | null>(null)

  const onSignIn = () => setAuthModalType('signIn')
  const onSignUp = () => setAuthModalType('signUp')
  const onClose = () => setAuthModalType(null)

  return (
    <Container>
      {auth.isSignedIn && (
        <>
          <Avatar
            width={36}
            height={36}
            src={auth.user.profilePic ?? 'https://www.automotiveone.com/wp-content/uploads/2019/02/placeholder-user-image.jpg'}
            alt={auth.user.firstName}
          />
          <Typography>{ auth.user.firstName }</Typography>
        </>
      )}

      {!auth.isSignedIn && (
        <>
          <Button onClick={onSignIn}>Sign In</Button>
          <Button onClick={onSignUp} variant="contained">Sign Up</Button>
          <AuthModal
            type={authModalType}
            onClose={onClose}
          />
        </>
      )}
    </Container>
  )
}
