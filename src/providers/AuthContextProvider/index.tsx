import React, { ReactNode, createContext, useState } from 'react'

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({})

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

export default function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [auth, setAuth] = useState<DefaultAuthStateType>(defaultAuthState)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
