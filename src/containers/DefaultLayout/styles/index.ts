import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// styles
const drawerWidth = 240;
const headerHeight = 64;
const footerHeight = 54;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // default layout
    root: {
      paddingBottom: 20,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      padding: theme.spacing(3),
      color: theme.palette.text.secondary,
    },
    content: {
      paddingBottom: 60,
    },
    toolbar: theme.mixins.toolbar,

    // default header
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    selectInput: {
      '& div, svg': {
        color: '#fff',
      },
      '&::before': {
        borderBottom: 'none !important',
      },
    },

    // default aside
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    gridBar: {
      height: headerHeight,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    icon: {
      color: theme.palette.text.secondary,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },

    // default footer
    footer: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default,
    },
    footerGrid: {
      height: footerHeight,
      padding: '0 24px',
    },
  }),
);

export default useStyles;
