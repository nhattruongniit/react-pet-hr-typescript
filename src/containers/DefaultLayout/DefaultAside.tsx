import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

// material core
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

// material icons
import DashboardIcon from '@material-ui/icons/Dashboard';

// atoms
import TypographyBase from 'components/atoms/TypographyBase';

// actions
import { setSidebar } from 'redux/actions';

// types
import IState from 'IState';

// styles
import useStyles from './styles';

// redux
const mapStateToProps = (state: IState) => {
  const {
    app: { isSidebar },
  } = state;
  return {
    isSidebar,
  };
};

const mapDispatchToProps = {
  setSidebar,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ResponsiveDrawerProps {
  container?: any;
}

type IProps = ResponsiveDrawerProps & PropsFromRedux;

const DefaultAside = ({ isSidebar, setSidebar, container }: IProps) => {
  const classes = useStyles();
  const { t: translate } = useTranslation();

  const handleDrawerToggle = () => {
    setSidebar(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Grid container alignItems="center" justify="center" className={classes.gridBar}>
          <TypographyBase variant="h1" text="HR" />
        </Grid>
      </div>

      <Divider />

      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText secondary={translate("home")} />
          </ListItem>
        </Link>
        <Link to="/slider-image">
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText secondary="Slider Image" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={isSidebar}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open={isSidebar}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default connector(memo(DefaultAside));
