import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// src
import light from './palette/light'
import typography from './typography'
import MuiButton from './overrides/MuiButton'

import { ThemeType } from '../types'

let theme = (mode: ThemeType) => {
  return responsiveFontSizes(createTheme({
    palette: {
      mode,
      ...light
    },
    typography,
    components: {
      // @ts-ignore
      MuiButton
    }
  }))
}

export default theme
