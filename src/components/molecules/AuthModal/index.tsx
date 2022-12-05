import React from 'react'

import { DialogContent, DialogTitle, Typography } from '@mui/material'

// src
import BaseModal from '../../atoms/BaseModal'
import SignInForm from '../../organisms/SignInForm'

interface AuthModalProps {
  open: boolean
  onClose: () => void
}

export default function AuthModal({ open, onClose }: AuthModalProps) {

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      maxWidth="xs"
    >
      <DialogTitle>
        <Typography align="center">Sign in to account</Typography>
      </DialogTitle>

      <DialogContent>
        <SignInForm />
      </DialogContent>
    </BaseModal>
  )
}
