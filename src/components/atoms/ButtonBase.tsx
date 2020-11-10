import React from 'react';

// material icon
import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

type IStyles = {
  width?: string;
  bgColor?: string;
  bgHoverColor?: string;
};

export type IButtonBaseProps = IStyles &
  ButtonProps & {
    text: string;
    className?: string;
  };

const useStyles = (props: IStyles) =>
  makeStyles(() => ({
    root: {
      width: props.width,
      display: 'inline-block',
      '& button': {
        backgroundColor: props.bgColor,
        '&:hover ': {
          backgroundColor: props.bgHoverColor,
        },
      },
    },
  }));

const ButtonBase = ({ text, width = 'auto', className, bgColor, bgHoverColor, ...props }: IButtonBaseProps) => {
  const classes = useStyles({ width, bgColor, bgHoverColor })();

  return (
    <div className={classes.root}>
      <Button fullWidth className={className} {...props}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonBase;
