import React, { memo, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// material icons
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

const DefaultFooter = memo(() => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        color="primary"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
      <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction label="Go Top" icon={<ArrowUpwardIcon />} />
    </BottomNavigation>
  );
});

export default DefaultFooter;
