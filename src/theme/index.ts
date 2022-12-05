import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// src
import light from './palette/light'
import typography from './typography'
import MuiButton from './overrides/MuiButton'
import MuiOutlinedInput from './overrides/MuiOutlinedInput'

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
      MuiButton,
      MuiOutlinedInput
    }
  }))
}

export default theme
