import React, { memo } from 'react';
import { connect, ConnectedProps } from 'react-redux';

// material core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// material icons
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

// context
import { useGlobalContext } from 'context/GlobalContext';

// types
import IState from 'IState';

// actions
import { setSidebar, setDarkMode } from 'redux/actions';

// styles
import useStyles from './styles';

// redux
const mapStateToProps = (state: IState) => {
  const {
    app: { mode },
  } = state;
  return {
    mode,
  };
};

const mapDispatchToProps = {
  setSidebar,
  setDarkMode,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const DefaultHeader = ({ mode, setSidebar, setDarkMode }: PropsFromRedux) => {
  const classes = useStyles();
  const { lang, setLang } = useGlobalContext();

  const handleDrawerToggle = () => {
    setSidebar(true);
  };

  const handleDarkMode = () => {
    const type = mode === 'light' ? 'dark' : 'light';
    setDarkMode(type);
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    setLang(value);
  };

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Grid container justify="flex-end">
          <Select value={lang} onChange={handleChange} className={classes.selectInput}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="vn">Vietnamese</MenuItem>
          </Select>
          <IconButton onClick={handleDarkMode} color="inherit">
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default connector(memo(DefaultHeader));
