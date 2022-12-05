import React from 'react'

import { DialogContent, DialogTitle } from '@mui/material'

// src
import BaseModal from '../../atoms/BaseModal'
import SignInForm from '../../organisms/SignInForm'
import { AuthApiVariantType } from '../../../types'

interface AuthModalProps {
  type: AuthApiVariantType | null
  onClose: () => void
}

export default function AuthModal({ type, onClose }: AuthModalProps) {

  return (
    <BaseModal
      open={Boolean(type)}
      onClose={onClose}
    >
      <DialogTitle>
        {Boolean(type) && type}
      </DialogTitle>

      <DialogContent>
        {type === 'signIn' && <SignInForm />}
        {type === 'signUp' && <SignInForm />}
      </DialogContent>
    </BaseModal>
  )
}
