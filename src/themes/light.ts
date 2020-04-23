import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#f00',
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
    MuiDrawer: {
      paper: {
        width: '70%',
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
    MuiInputBase: {
      input: {
        color: '#000',
      },
    },
  },
});
export default lightTheme;
