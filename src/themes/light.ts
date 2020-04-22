import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#92003b',
      light: '#fff',
    },
    secondary: {
      main: '#fff',
      light: '#ff4081',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#757575',
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
    },
    MuiListItemText: {
      secondary: {
        fontSize: '1rem',
      },
    },
    MuiBottomNavigationAction: {
      wrapper: {
        color: '#fff',
      },
    },
  },
});

export default lightTheme;
