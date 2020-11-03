import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

import carouselItems from '../data/carouselItems';

const useStyles = makeStyles((theme) => ({
  Banner: {
    height: theme.spacing(50),
    position: 'relative',

    '& $Media': {
      backgroundColor: theme.palette.common.white,
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      position: 'absolute',
      transition: '300ms',
      cursor: 'pointer',
      '&:hover': {
        filter: 'brightness(115%)',
      },
    },

    '& $Content': {
      color: theme.palette.common.white,
      backgroundImage: 'linear-gradient(to right, rgb(0,0,0) , transparent);',
      height: '100%',
      width: '100%',
      cursor: 'pointer',
      position: 'absolute',
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      transition: theme.transitions.duration.standard + 'ms',
      '&:hover, &:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

        '& $ViewButton': {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.black,
        },
      },

      '& $Title': {
        wordBreak: 'break-all',
        fontWeight: theme.typography.fontWeightRegular,
        display: '-webkit-box',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      },

      '& $Caption': {
        marginTop: theme.spacing(1.5),
        display: '-webkit-box',
        '-webkit-line-clamp': '4',
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      },

      '& $ViewButton': {
        marginTop: theme.spacing(5),
        color: theme.palette.common.white,
        fontSize: theme.typography.fontSize,
        border: '3px solid white',
        textTransform: 'capitalize',
        transition: theme.transitions.duration.shorter + 'ms',
      },
    },
  },
  Media: {},
  Content: {},
  ViewButton: {},
  Title: {},
  Caption: {},
}));

function Banner(props) {
  if (props.newProp) console.log(props.newProp);

  const classes = useStyles();

  let items = [];
  const content = (
    <CardContent className={classes.Content} key='content'>
      <Typography variant='h4' className={classes.Title}>
        {props.item.Name}
      </Typography>

      <Typography className={classes.Caption}>{props.item.Caption}</Typography>

      <Button variant='outlined' className={classes.ViewButton}>
        View Now
      </Button>
    </CardContent>
  );

  const media = (
    <CardMedia
      className={classes.Media}
      image={props.item.Image}
      title={props.item.Name}
      key={props.item.Name}
    ></CardMedia>
  );

  items.push(media);
  items.push(content);

  return (
    <Card raised className={classes.Banner}>
      {items}
    </Card>
  );
}

function CarouselBanner() {
  const classes = useStyles();
  const items = carouselItems;
  return (
    <React.Fragment>
      <Carousel
        className={classes.Example}
        autoPlay={false}
        timer={300}
        animation={'slide'}
        indicators={true}
        timeout={10}
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInVisible={false}
      >
        {items.map((item, index) => {
          return <Banner item={item} key={index} />;
        })}
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselBanner;
