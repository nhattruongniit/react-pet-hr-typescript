import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// atoms
import RatingBase, { IRatingProps } from '../atoms/RatingBase';
import LinkBase, { ILinkBaseProps } from '../atoms/LinkBase';
import TypographyBase from '../atoms/TypographyBase';

// styles
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  rating: {
    marginTop: 10,
  },
  cardMedia: {
    padding: '0 16px',
    textAlign: 'center',
  },
  list: {
    margin: '10px 0 0 16px',
    '& li': {
      listStyle: 'disc',
    },
  },
}));

type IProps = ILinkBaseProps &
  IRatingProps & {
    title: string;
    price: string;
  };

const CardBase = (props: IProps) => {
  const classes = useStyles();
  const { title, linkHref, linkImage, linkText, value, total, price } = props;

  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia className={classes.cardMedia}>
        <LinkBase linkHref={linkHref} linkImage={linkImage || '/assets/images/img-default.jpg'} hoverOpacity={0.7} width="100%" />
      </CardMedia>
      <CardContent>
        <LinkBase linkHref={linkHref} underline="hover" linkText={linkText} />
        <TypographyBase variant="subtitle2" color="textSecondary" text={price} />
        <div className={classes.rating}>
          <RatingBase readOnly value={value} total={total} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardBase;
