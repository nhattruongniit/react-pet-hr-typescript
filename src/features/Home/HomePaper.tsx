import React from 'react';
import clsx from 'clsx';

// material core
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// material icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// atoms
import TypographyBase from 'components/atoms/TypographyBase';
import RatingBase from 'components/atoms/RatingBase';

const useStyles = makeStyles(() => ({
  paper: {
    flex: 1,
    width: '100%',
    maxWidth: 360,
    minHeight: 97,
    borderRadius: 8,
    alignItems: 'stretch',
    display: 'flex',
    marginTop: 30,
    '& a': {
      textDecoration: 'none',
    },
    '&+ &': {
      marginTop: 15,
    },
  },
  paperGrid: {
    padding: '7px 15px',
  },
  paperPoint: {
    backgroundColor: 'rgb(225, 129, 166)',
  },
  paperReservation: {
    backgroundColor: '#752651',
  },
  paperCoupon: {
    backgroundColor: 'rgb(185, 117, 86)',
  },
  paperShop: {
    backgroundColor: 'rgb(107, 51, 26)',
  },
  paperProduct: {
    backgroundColor: 'rgb(133, 15, 51)',
  },
  paperText: {
    fontSize: '1.5rem',
  },
  paperSvg: {
    '& svg': {
      fontSize: '2rem',
    },
  },
  paperRat: {
    color: '#fff',
  },
}));

function HomePaper() {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Paper className={clsx(classes.paper, classes.paperPoint)}>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
          className={classes.paperGrid}
          spacing={2}
        >
          <Grid item>
            <img src="assets/images/icon-star.svg" alt="Icon" title="Icon" />
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            direction="column"
            alignItems="center"
          >
            <RatingBase readOnly value={2} className={classes.paperRat} />
            <TypographyBase
              variant="h5"
              color="textPrimary"
              component="div"
              text="67 pt"
            />
            <TypographyBase
              variant="subtitle2"
              color="textPrimary"
              component="div"
              text="Standard"
            />
          </Grid>
          <Grid item className={classes.paperSvg}>
            <ArrowForwardIosIcon />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={clsx(classes.paper, classes.paperReservation)}>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
          className={classes.paperGrid}
          spacing={2}
        >
          <Grid item>
            <img
              src="assets/images/icon-reservation.svg"
              alt="Icon"
              title="Icon"
            />
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            direction="row"
            alignItems="center"
          >
            <TypographyBase
              variant="subtitle1"
              color="textPrimary"
              component="div"
              className={classes.paperText}
              text="Reservation"
            />
          </Grid>
          <Grid item className={classes.paperSvg}>
            <ArrowForwardIosIcon />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={clsx(classes.paper, classes.paperCoupon)}>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
          className={classes.paperGrid}
          spacing={2}
        >
          <Grid item>
            <img src="assets/images/icon-coupon.svg" alt="Icon" title="Icon" />
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            direction="row"
            alignItems="center"
          >
            <TypographyBase
              variant="subtitle1"
              color="textPrimary"
              component="div"
              className={classes.paperText}
              text="Coupon"
            />
          </Grid>
          <Grid item className={classes.paperSvg}>
            <ArrowForwardIosIcon />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={clsx(classes.paper, classes.paperShop)}>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
          className={classes.paperGrid}
          spacing={2}
        >
          <Grid item>
            <img src="assets/images/icon-shop.svg" alt="Icon" title="Icon" />
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            direction="row"
            alignItems="center"
          >
            <TypographyBase
              variant="subtitle1"
              color="textPrimary"
              component="div"
              className={classes.paperText}
              text="Search Shop"
            />
          </Grid>
          <Grid item className={classes.paperSvg}>
            <ArrowForwardIosIcon />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={clsx(classes.paper, classes.paperProduct)}>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
          className={classes.paperGrid}
          spacing={2}
        >
          <Grid item>
            <img src="assets/images/icon-product.svg" alt="Icon" title="Icon" />
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            direction="row"
            alignItems="center"
          >
            <TypographyBase
              variant="subtitle1"
              color="textPrimary"
              component="div"
              className={classes.paperText}
              text="Search Product"
            />
          </Grid>
          <Grid item className={classes.paperSvg}>
            <ArrowForwardIosIcon />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default HomePaper;
