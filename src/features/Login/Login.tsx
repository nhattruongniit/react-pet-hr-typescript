import React from 'react';
import { useHistory, Link } from 'react-router-dom';

// material UI
import { Grid, Fab } from '@material-ui/core';

// material icon
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';

// atoms
import TextFields from 'components/atoms/TextFields';
import ButtonBase from 'components/atoms/ButtonBase';
import TypographyBase from 'components/atoms/TypographyBase';

// styles
import useStyles from './styles';

const Login = () => {
  const history = useHistory();
  const handleTextFieldChange = () => {};
  const classes = useStyles();

  const handleSubmit = () => {
    history.push('/home');
  };

  return (
    <Grid container direction="column" alignItems="stretch" alignContent="center" className={classes.loginContainer}>
      <Grid container justify="center" className={classes.zIndexOne}>
        <img src="/assets/images/logo.png" alt="logo" title="logo" />
      </Grid>
      <Grid container className={classes.content}>
        <Grid container>
          <TextFields
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleTextFieldChange}
            icon={<PersonIcon />}
          />
          <TextFields
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleTextFieldChange}
            icon={<LockIcon />}
          />
        </Grid>
        <Grid container justify="flex-end">
          <div className={classes.textForget}>
            <TypographyBase variant="h6" color="textPrimary" text="Forget Password?" component="a" />
          </div>
        </Grid>
        <Grid container>
          <ButtonBase variant="contained" type="button" text="Login" handleSubmit={handleSubmit} />
        </Grid>
        <Grid container item alignItems="center" justify="space-evenly" className={classes.spaceBoth}>
          <Link to="/register">
            <TypographyBase variant="h6" color="textPrimary" text="Please register" component="span" />
          </Link>
        </Grid>
        <Grid container direction="column" item justify="space-around" alignItems="center">
          <TypographyBase variant="h6" color="textPrimary" text="Login Via SNS" component="div" />
          <Grid container alignItems="center" item justify="space-evenly" className={classes.spaceBoth}>
            <Fab aria-label="Add" color="primary" className={classes.fabFace}>
              <FacebookIcon />
            </Fab>
            <Fab aria-label="Add" className={classes.fabMail}>
              <MailOutlineIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
