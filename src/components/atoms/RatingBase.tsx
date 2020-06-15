import React, { memo } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Rating, { RatingProps } from '@material-ui/lab/Rating';

// atoms
import TypographyBase from './TypographyBase';

export type IRatingProps = RatingProps & {
  total?: string;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const RatingBase = ({ className, total, ...rest }: IRatingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating precision={0.5} {...rest} />
      {total && <TypographyBase text={total} />}
    </div>
  );
};

export default memo(RatingBase);
