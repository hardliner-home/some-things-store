import { useContext } from 'react'

import { AuthContext } from '../providers/AuthContextProvider'
import { FormikValues } from 'formik'
import { axiosClient } from '../utils/apiUtils/api.config'

// src
import { AuthApiVariantType } from '../types'

export default function useAuthApi(variant: AuthApiVariantType) {
  const { auth, setAuth } = useContext(AuthContext)

  const onSignIn = (values: FormikValues) => {
    setAuth({ ...auth, isLoading: true })
    axiosClient.post('/users/sign_in', { user: values })
      .then(response => {
        setAuth({
          isLoading: false,
          isSignedIn: true,
          user: response.data
        })
      })
      .catch((error) => {
        setAuth({
          isLoading: false,
          isSignedIn: false,
          user: null
        })
      })
  }

  const onSignUp = (values: FormikValues) => {
    setAuth({ ...auth, isLoading: true })
    axiosClient.post('/users/sign_up', { user: values })
      .then(response => {
        setAuth({
          isLoading: false,
          isSignedIn: true,
          user: response.data
        })
      })
      .catch((error) => {
        setAuth({
          isLoading: false,
          isSignedIn: false,
          user: null
        })
      })
  }

  switch (variant) {
    case 'signIn':
      return onSignIn
    case 'signUp':
      return onSignUp
    default:
      return () => {}
  }
}
