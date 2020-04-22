import React from 'react';
import { connect } from 'react-redux';

// material core
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// material icons
import HomeIcon from '@material-ui/icons/Home';

// actions
import { setSidebar } from 'redux/actions';

// type
import IState from 'IState';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type IProps = {
  showSidebar: boolean;
  setSidebar: (showSidebar: boolean) => void;
};

const DefaultAside = ({ showSidebar, setSidebar }: IProps) => {
  const classes = useStyles();

  const toggleDrawer = () => {
    setSidebar(false);
  };

  return (
    <Drawer anchor="left" open={showSidebar} onClose={toggleDrawer}>
      <div className={classes.list} role="presentation" onClick={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText secondary="Home" />
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
};

const mapStateToProps = (state: IState) => {
  const {
    app: { showSidebar },
  } = state;
  return {
    showSidebar,
  };
};

const mapDispatchToProps = {
  setSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultAside);
