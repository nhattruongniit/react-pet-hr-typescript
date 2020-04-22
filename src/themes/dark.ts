import { createMuiTheme } from '@material-ui/core';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#424242',
      paper: '#424242',
    },
    secondary: {
      main: '#000',
    },
    text: {
      secondary: '#000',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        height: 40,
        color: '#fff',
        backgroundColor: '#ba7402',
        textAlign: 'center',
        boxShadow: 'none',
        padding: '5px 16px',
        textTransform: 'none',
        '&:hover': { backgroundColor: '#ba7402 !important' },
      },
      text: {
        color: '#fff',
      },
    },
  },
});

export default darkTheme;
