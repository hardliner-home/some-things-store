import React, { useContext } from 'react'

import {
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography
} from '@mui/material'
import { useFormik } from 'formik'

import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded'

// src
import useAuthApi from '../../../hooks/useAuthApi'
import Link from 'next/link'
import { AuthContext } from '../../../providers/AuthContextProvider'

const initialValues = {
  email: '',
  password: '',
}

export default function SignInForm() {
  const { auth } = useContext(AuthContext)
  const onSubmit = useAuthApi('signIn')

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3} justifyContent="center">

        <Grid item xs={12}>
          <OutlinedInput
            id="email"
            name="email"
            type="email"
            fullWidth
            size="small"
            onChange={formik.handleChange}
            value={formik.values.email}
            startAdornment={
              <InputAdornment position="start">
                <MailOutlineRoundedIcon />
              </InputAdornment>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <OutlinedInput
            id="password"
            name="password"
            type="password"
            fullWidth
            size="small"
            onChange={formik.handleChange}
            value={formik.values.password}
            startAdornment={
              <InputAdornment position="start">
                <LockOpenRoundedIcon />
              </InputAdornment>
            }
          />
        </Grid>

        <Grid item>
          <Button
            fullWidth
            variant="outlined"
            type="submit"
            disabled={auth.isLoading}
          >
            Sign In
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography align="center" variant="body2">
            Don't have an account?&nbsp;
            <Link href="/auth/sign_up">Sign Up</Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  )
}
