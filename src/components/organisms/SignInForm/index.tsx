import React from 'react'

import { Button, OutlinedInput } from '@mui/material'
import { useFormik } from 'formik'

// src
import useAuthApi from '../../../hooks/useAuthApi'

const initialValues = {
  email: 'shabanov.web@gmail.com',
  password: '123456',
}

export default function SignInForm() {
  const onSubmit = useAuthApi('signIn')

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <OutlinedInput
        id="email"
        name="email"
        type="email"
        fullWidth
        size="small"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <OutlinedInput
        id="password"
        name="password"
        type="password"
        fullWidth
        size="small"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <Button
        fullWidth
        variant="outlined"
        type="submit"
      >
        Sign In
      </Button>
    </form>
  )
}
