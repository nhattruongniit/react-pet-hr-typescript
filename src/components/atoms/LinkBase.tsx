import React, { memo } from 'react';
import clsx from 'clsx';

// material core
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

type IStylesProps = {
  hoverOpacity?: number;
  width?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: 'normal' | 'bold';
  backgroundColorHover?: string;
};

export type ILinkBaseProps = IStylesProps & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption';
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary';
  underline?: 'none' | 'hover' | 'always';
  target?: '_self' | '_blank';
  linkAlt?: string;
  linkImage?: string;
  linkText?: string;
  className?: string;
  linkHref: string;
};

const useStyles = (props: IStylesProps) =>
  makeStyles(() => ({
    root: {
      display: 'block',
      position: 'relative',
      width: props.width || 'inherit',
      textAlign: props.textAlign || 'left',
      fontWeight: props.fontWeight || 'normal',
      '& .iconHover': {
        display: 'none',
      },
      '&:hover': {
        opacity: props.hoverOpacity || 1,
        backgroundColor: props.backgroundColorHover || 'transparent',
        '& .iconDefault': {
          display: 'none',
        },
        '& .iconHover': {
          display: 'block',
        },
      },

      '& img': {
        width: 'inherit',
      },
    },
  }));

const LinkBase = ({
  variant = 'subtitle2',
  color = 'textSecondary',
  underline = 'none',
  target = '_self',
  linkAlt = 'picture',
  linkImage = '',
  linkText = '',
  className,
  linkHref,
  ...styles
}: ILinkBaseProps) => {
  const classes = useStyles(styles)();

  return (
    <Link
      color={color}
      underline={underline}
      target={target}
      href={linkHref}
      variant={variant}
      rel="noopener"
      className={clsx(className, classes.root)}
    >
      {linkImage && <img src={linkImage} alt={linkAlt} />}
      {linkText && <span>{linkText}</span>}
    </Link>
  );
};

export default memo(LinkBase);
