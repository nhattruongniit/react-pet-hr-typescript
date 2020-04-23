import React from 'react';
import { useHistory, Link } from 'react-router-dom';

// material UI
import { Grid } from '@material-ui/core';

// material icon
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

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
    <Grid
      container
      direction="column"
      alignItems="stretch"
      alignContent="center"
      className={classes.loginContainer}
    >
      <h1>Login</h1>
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
            <TypographyBase
              variant="h6"
              color="textPrimary"
              text="Forget Password?"
              component="a"
            />
          </div>
        </Grid>
        <Grid container>
          <ButtonBase
            variant="contained"
            type="button"
            text="Login"
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justify="space-evenly"
          className={classes.spaceBoth}
        >
          <Link to="/register">
            <TypographyBase
              variant="h6"
              color="textPrimary"
              text="Please register"
              component="span"
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
