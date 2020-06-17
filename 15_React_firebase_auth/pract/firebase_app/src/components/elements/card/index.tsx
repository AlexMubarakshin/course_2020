import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type CardProps = {
  image: string;
  title: string;
  description: string;
}

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const Card: React.FC<CardProps> = ({ image, title, description }: CardProps) => {
  const classes = useStyles();
  return (
    <MuiCard>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Купить
        </Button>
      </CardActions>
    </MuiCard>
  );
};


export default Card;
