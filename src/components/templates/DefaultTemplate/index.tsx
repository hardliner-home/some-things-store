import React, { ReactElement } from 'react'

import Container from '@mui/material/Container'

// src
import Header from '../../molecules/Header'

interface DefaultTemplateProps {
  children: ReactElement
}

export default function DefaultTemplate({ children }: DefaultTemplateProps): JSX.Element {

  return (
    <>
      <Header />
      <Container component="main">
        {children}
      </Container>
    </>
  )
}
