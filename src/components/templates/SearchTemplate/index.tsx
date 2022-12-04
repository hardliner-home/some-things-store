import React, { ReactElement } from 'react'

import Container from '@mui/material/Container'

// src
import Header from '../../molecules/Header'

interface SearchTemplate {
  children: ReactElement
}

export default function SearchTemplate({ children }: SearchTemplate): JSX.Element {

  return (
    <>
      <Header />
      <Container component="main">
        {children}
      </Container>
    </>
  )
}
