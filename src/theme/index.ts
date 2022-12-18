import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// src
import palette from './palette'
import typography from './typography'
import components from './overrides'

const theme = responsiveFontSizes(
  createTheme({
    palette,
    typography,
    // @ts-ignore
    components,
  })
)

export default theme
