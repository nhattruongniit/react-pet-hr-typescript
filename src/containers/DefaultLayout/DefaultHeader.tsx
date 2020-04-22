import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

// material core
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

// atoms
import TypographyBase from 'components/atoms/TypographyBase';
import IconButtonBase from 'components/atoms/IconButtonBase';

// actions
import { setSidebar } from 'redux/actions';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'fixed',
      height: 56,
    },
    headerToolBar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
);

const mapDispatchToProps = {
  setSidebar,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux & {};

const DefaultHeader = ({ setSidebar }: IProps) => {
  const classes = useStyles();
  const handleToggleSidebar = () => {
    setSidebar(true);
  };
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.headerToolBar}>
        <div onClick={handleToggleSidebar}>
          <IconButtonBase edge="start" color="secondary" icon={<MenuIcon />} />
        </div>
        <TypographyBase
          variant="h1"
          color="textPrimary"
          text="Fashion"
          component="div"
        />
        <IconButtonBase
          edge="end"
          color="secondary"
          icon={<QuestionAnswerIcon />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default connector(DefaultHeader);
