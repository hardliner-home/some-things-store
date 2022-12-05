import { Container } from '@mui/material'

import { styled } from '@mui/material/styles'

// src
import SignUpForm from '../../src/components/organisms/SignUpForm'

const SignUpContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function SignUpPage() {

  return (
    <SignUpContainer maxWidth="sm">
      <SignUpForm />
    </SignUpContainer>
  )
}
