import { colors, createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    action: {
      active: colors.blueGrey[600],
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.indigo[600],
    },
    secondary: {
      main: '#5850EC',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        '&::placeholder': {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
  },
});

export default lightTheme;
