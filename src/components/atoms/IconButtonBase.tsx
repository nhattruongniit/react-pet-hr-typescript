import React from 'react';
import { IconButton } from '@material-ui/core';

type IProps = {
  edge?: 'start' | 'end' | false;
  size?: 'small' | 'medium';
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  icon: React.ReactNode;
};

const IconButtonBase = ({ edge, size, color, icon }: IProps) => {
  return (
    <IconButton edge={edge} size={size} color={color}>
      {icon}
    </IconButton>
  );
};

export default IconButtonBase;
