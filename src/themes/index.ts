// material core
import { createMuiTheme } from '@material-ui/core';

import light from './light';
import dark from './dark';

// theme
const typeTheme = [light, dark];

const theme = (type: number) =>
  createMuiTheme({
    ...typeTheme[type],
    typography: {
      h1: {
        fontWeight: 500,
        fontSize: '35px',
        lineHeight: '40px',
      },
      h2: {
        fontWeight: 500,
        fontSize: '29px',
        lineHeight: '32px',
      },
      h3: {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '28px',
      },
      h4: {
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '24px',
      },
      h5: {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
      },
      h6: {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
      },
      subtitle1: {
        fontSize: '16px',
        lineHeight: '25px',
      },
      subtitle2: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '21px',
      },
      body1: {
        fontSize: '14px',
        lineHeight: '21px',
      },
      body2: {
        fontSize: '12px',
        lineHeight: '18px',
      },
      button: {
        fontSize: '14px',
      },
      caption: {
        fontSize: '11px',
        lineHeight: '13px',
      },
      overline: {
        fontSize: '11px',
        fontWeight: 500,
        lineHeight: '13px',
        textTransform: 'uppercase',
      },
    },
    overrides: {
      MuiIconButton: {
        root: {
          color: '#999',
        },
      },
    },
  });

export default theme;
