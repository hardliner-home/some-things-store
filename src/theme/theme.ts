import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { workSans } from './typography'


const theme = createTheme({
  typography: {
    fontFamily: workSans.style.fontFamily,
    h1: {
      fontSize: '50px'
    }
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
