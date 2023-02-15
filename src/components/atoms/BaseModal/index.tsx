import React, { ReactNode } from 'react'

import { Breakpoint, Dialog } from '@mui/material'

// src
interface BaseModalProps {
  open: boolean
  children: ReactNode
  onClose: () => void
  maxWidth: false | Breakpoint | undefined
}

export default function BaseModal({ open, children, onClose, maxWidth = "xs" }: BaseModalProps) {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
    >
      {children}
    </Dialog>
  )
}
