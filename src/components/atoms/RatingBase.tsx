import React from 'react';
import Rating, { RatingProps } from '@material-ui/lab/Rating';

type IProps = RatingProps & {
  className?: string;
};

const RatingBase = ({ className, ...rest }: IProps) => {
  return <Rating className={className} {...rest} />;
};

export default RatingBase;
