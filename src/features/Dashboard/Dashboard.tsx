import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

// material core
import { makeStyles } from '@material-ui/core/styles';

// components
import TypographyBase from 'components/atoms/TypographyBase';

// types
import IState from 'IState';
import { ITodo } from './redux/types';

// actions
import { fetchTodoRequest } from './redux/actions';

// styles
const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 20,
  },
}));

// connect redux
const mapStateToProps = (state: IState) => {
  const {
    dashboard: { todos },
  } = state;

  return {
    todos,
  };
};

const mapDispatchToProps = {
  fetchTodoRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Dashboard = ({ todos, fetchTodoRequest }: PropsFromRedux) => {
  const classes = useStyles();
  const { t: translate } = useTranslation();

  useEffect(() => {
    fetchTodoRequest();
  }, [fetchTodoRequest]);

  return (
    <div className={classes.root}>
      <TypographyBase variant="h1" color="textSecondary" text={translate('dashboard')} /> <br />
      <TypographyBase variant="h5" color="textSecondary" text="Example fetch data with saga" /> <br />
      <TypographyBase variant="h4" color="textSecondary" text="Todo" />
      <br />
      {todos.map((todo: ITodo) => (
        <div key={todo.id}>
          <TypographyBase variant="h5" color="textSecondary" text={`Id: ${todo.id.toString()}`} />
          <TypographyBase variant="h5" color="textSecondary" text={`Title: ${todo.title}`} />
        </div>
      ))}
      <br />
    </div>
  );
};

export default connector(Dashboard);
