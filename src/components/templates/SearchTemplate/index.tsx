import React, { ReactElement } from 'react'

import Container from '@mui/material/Container'

// src
import Header from '../../molecules/Header'

interface SearchTemplateProps {
  children: ReactElement
}

export default function SearchTemplate({ children }: SearchTemplateProps): JSX.Element {

  return (
    <>
      <Header />
      <Container component="main">
        {children}
      </Container>
    </>
  )
}
