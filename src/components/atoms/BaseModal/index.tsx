import React, { ReactNode } from 'react'

import { Dialog } from '@mui/material'

// src
interface BaseModalProps {
  open: boolean
  children: ReactNode
  onClose: () => void
}

export default function BaseModal({ open, children, onClose }: BaseModalProps) {

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      {children}
    </Dialog>
  )
}
