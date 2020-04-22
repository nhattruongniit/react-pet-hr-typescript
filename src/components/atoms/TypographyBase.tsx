import React from 'react';

import { Typography, TypographyProps } from '@material-ui/core';

type IProps = TypographyProps & {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption';
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'error';
  component: 'div' | 'a' | 'p' | 'span';
  text: string;
  className?: string;
};

const TypographyBase = ({ variant, color, component, text, className }: IProps) => {
  return (
    <Typography variant={variant} color={color} component={component} className={className}>
      {text}
    </Typography>
  );
};

export default TypographyBase;
