import React from 'react';

// material core
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// components
import HomePaper from './HomePaper';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 20,
  },
  banner: {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: 30,
    height: 0,
    overflow: 'hidden',
    boxShadow: '0px 0px 5px -1px #000',
    '& img': {
      position: 'absolute',
      minWidth: '100%',
      maxWidth: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <div className={classes.banner}>
          <img src="assets/images/home-banner.png" alt="Banner" title="Banner" />
        </div>
      </Grid>
      <HomePaper />
    </div>
  );
}

export default Home;
