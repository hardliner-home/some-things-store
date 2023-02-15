import React, { useContext, useRef } from 'react'

import {
  Button,
  Grid,
  OutlinedInput,
  Typography,
  InputAdornment
} from '@mui/material'
import { useFormik } from 'formik'

import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'

// src
import useAuthApi from '../../../hooks/useAuthApi'
import Image from 'next/image'
import { AuthContext } from '../../../providers/AuthContextProvider'

const initialValues = {
  email: '',
  password: '',
  phone: '',
  profilePicture: null,
  firstName: '',
  lastName: '',
}

const fishImage = 'https://www.automotiveone.com/wp-content/uploads/2019/02/placeholder-user-image.jpg'

export default function SignUpForm() {
  const { auth } = useContext(AuthContext)
  const onSubmit = useAuthApi('signUp')

  const fileRef = useRef(null)

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  const imgSrc = formik.values.profilePicture
    ? URL.createObjectURL(formik.values.profilePicture)
    : fishImage

  const onFileUploadClick = () => {
    // @ts-ignore
    if (fileRef && fileRef.current) fileRef.current.click()
  }

  const onProfilePicChange = (e: any) => {
    formik.setFieldValue('profilePicture', e.target.files[0])
  }

  const fieldSet = [
    { xs: 6, field: 'firstName', type: 'text', placeholder: 'First name', icon: <PersonOutlineRoundedIcon /> },
    { xs: 6, field: 'lastName', type: 'text', placeholder: 'Last name', icon: <PersonOutlineRoundedIcon /> },
    { xs: 12, field: 'phone', type: 'phone', placeholder: 'Phone', icon: <PhoneAndroidRoundedIcon /> },
    { xs: 12, field: 'email', type: 'email', placeholder: 'Email', icon: <MailOutlineRoundedIcon /> },
    { xs: 12, field: 'password', type: 'password', placeholder: 'Password', icon: <LockRoundedIcon /> },
]

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent="center">

        <Typography variant="h3" align="center">SignUp for free</Typography>

        {fieldSet.map((fieldZone) => (
          <Grid item xs={fieldZone.xs} key={fieldZone.field}>
            <OutlinedInput
              id={fieldZone.field}
              name={fieldZone.field}
              type={fieldZone.type}
              placeholder={fieldZone.placeholder}
              fullWidth
              size="small"
              onChange={formik.handleChange}
              // @ts-ignore
              value={formik.values[fieldZone.field]}
              startAdornment={
                <InputAdornment position="start">
                  {fieldZone.icon}
                </InputAdornment>
              }
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Image
            width={100}
            height={100}
            src={imgSrc}
            alt="Profile Picture"
          />
          <input
            type="file"
            ref={fileRef}
            onChange={onProfilePicChange}
            style={{ display: 'none' }}
          />
          <Button onClick={onFileUploadClick}>UploadImage</Button>
        </Grid>

        <Grid item>
          <Button
            variant="outlined"
            type="submit"
            disabled={auth.isLoading}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
