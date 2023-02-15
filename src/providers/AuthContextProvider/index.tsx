import React, { ReactNode, createContext, useState, useEffect } from 'react'

// src
import { axiosClient } from '../../utils/apiUtils/api.config'

interface AuthContextProviderProps {
  children: ReactNode
}

type DefaultAuthStateType = {
  isSignedIn: boolean,
  isLoading: boolean,
  user: any
}

const defaultAuthState: DefaultAuthStateType = {
  isSignedIn: false,
  isLoading: false,
  user: null
}

const defaultSetAuth = (auth: DefaultAuthStateType) => auth as unknown

const initialAuthState = {
  auth: defaultAuthState,
  setAuth: defaultSetAuth
}

export const AuthContext = createContext(initialAuthState)

export default function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [auth, setAuth] = useState<DefaultAuthStateType>(defaultAuthState)

  useEffect(() =>  {
    axiosClient.get('/users/sign_in')
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
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
