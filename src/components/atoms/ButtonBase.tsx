import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

type IProps = ButtonProps & {
  variant: 'contained' | 'outlined' | 'text';
  text: string;
  handleSubmit?: () => void | null;
};

const ButtonBase = ({ variant, text, handleSubmit }: IProps) => {
  return (
    <Button variant={variant} fullWidth onClick={handleSubmit}>
      {text}
    </Button>
  );
};

export default ButtonBase;
