import React from 'react';

// material core
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

type IStyleProps = {
  hoverOpacity?: number;
  width?: string;
};

type IProps = IStyleProps & {
  alt?: string;
  title?: string;
  target?: '_self' | '_blank';
  href: string;
  src: string;
};

const useStyles = (props: IStyleProps) =>
  makeStyles(() => ({
    root: {
      display: 'inline-block',
      width: props.width || 'inherit',
      color: '#f00',
      '&:hover': {
        opacity: props.hoverOpacity || 1,
      },
      '& img': {
        width: 'inherit',
      },
    },
  }));

const LinkImage = ({ alt = 'picture', title = 'picture', target = '_self', href, src, ...styles }: IProps) => {
  const classes = useStyles(styles)();
  return (
    <Link href={href} rel="noopener" target={target} className={classes.root}>
      <img src={src} alt={alt} title={title} />
    </Link>
  );
};

export default LinkImage;