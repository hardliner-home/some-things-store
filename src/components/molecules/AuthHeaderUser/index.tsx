import React, { useState, MouseEvent } from 'react'

import {
  Popover,
  MenuItem,
  Typography,
  IconButton,
  ListItemIcon, Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

import Logout from '@mui/icons-material/Logout'

// src
import { UserType } from '../../../types'
import useAuthApi from '../../../hooks/useAuthApi'

const Avatar = styled(Image)`
  border-radius: 50%;
`

const DividerStuff = styled(Divider)`
  margin: 0 !important;
`

interface AuthHeaderUserProps {
  user: UserType
}

const fishImage = 'https://www.automotiveone.com/wp-content/uploads/2019/02/placeholder-user-image.jpg'

export default function AuthHeaderUser({ user }: AuthHeaderUserProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onSignOut = useAuthApi('signOut')

  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? 'account-menu' : undefined}
      >
        <Avatar
          width={36}
          height={36}
          placeholder="blur"
          blurDataURL="/android-chrome-192x192.png"
          src={user.profilePicture ?? fishImage}
          alt={user.firstName}
        />
      </IconButton>

      <Popover
        id="account-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
      >
        <MenuItem>
          <Typography>{user.fullName}</Typography>
        </MenuItem>

        <DividerStuff />

        <MenuItem onClick={onSignOut}>
          <ListItemIcon><Logout fontSize="small"/></ListItemIcon>
          Logout
        </MenuItem>
      </Popover>
    </>
  )
}
