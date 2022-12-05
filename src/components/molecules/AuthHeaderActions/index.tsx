import React, { useState } from 'react'

import { Button } from '@mui/material'
import Link from 'next/link'

// src
import AuthModal from '../AuthModal'
import styled from '@emotion/styled'

const ActionsContainer = styled('div')`
  display: flex;
  align-items: center;
`

export default function AuthHeaderActions() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onSignIn = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <ActionsContainer>
      <Button
        onClick={onSignIn}
        size="small"
      >
        Sign In
      </Button>

      <Button
        size="small"
        variant="contained"
        href="/auth/sign_up"
        component={Link}
      >
        Sign Up
      </Button>

      <AuthModal
        open={isOpen}
        onClose={onClose}
      />
    </ActionsContainer>
  )
}
