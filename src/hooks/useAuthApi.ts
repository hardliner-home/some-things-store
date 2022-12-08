import { useContext } from 'react'

import { FormikValues } from 'formik'
import { useRouter } from 'next/router'

// src
import { AuthContext } from '../providers/AuthContextProvider'
import { axiosClient } from '../utils/apiUtils/api.config'
import { toSnakeCase } from '../utils/baseUtils'
import { AuthApiVariantType } from '../types'

export default function useAuthApi(variant: AuthApiVariantType) {
  const router = useRouter()
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

    const userValues = new FormData()

    for (const key in values) {
      userValues.append(`user[${toSnakeCase(key)}]`, values[key])
    }

    axiosClient.post('/users', userValues)
      .then(response => {
        setAuth({
          isLoading: false,
          isSignedIn: true,
          user: response.data
        })
        router.push("/")
      })
      .catch((error) => {
        setAuth({
          isLoading: false,
          isSignedIn: false,
          user: null
        })
      })
  }

  const onSignOut = () => {
    axiosClient.delete('/users/sign_out')
      .then((response) => {
        setAuth({
          isLoading: false,
          isSignedIn: false,
          user: null
        })
      })
      .catch((error) => {
        setAuth({
          isLoading: false,
          isSignedIn: auth.isSignedIn,
          user: auth.user
        })
      })
  }

  switch (variant) {
    case 'signIn':
      return onSignIn
    case 'signUp':
      return onSignUp
    case 'signOut':
      return onSignOut
    default:
      return () => {}
  }
}
