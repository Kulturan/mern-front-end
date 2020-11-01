import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Banner: {
    height: '400px',
    position: 'relative',

    Media: {
      backgroundColor: 'white',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      transition: '300ms',
      cursor: 'pointer',
      '&:hover': {
        filter: 'brightness(115%)',
      },

      MediaCaption: {
        textOverflow: 'ellipsis',
        position: 'absolute',
        bottom: '0',
        padding: '15px',
        backgroundColor: 'black',
        color: 'white',
        opacity: '0.6',
        width: '100%',
        height: '10%',
        fontWeight: '200',
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
          opacity: '0.8',
        },
      },
    },

    BannerGrid: {
      height: '100%',
    },

    Content: {
      color: 'white',
      backgroundColor: 'red',
      height: '100%',
      cursor: 'pointer',
      padding: '30px',
      transition: '300ms',
      '&:hover, &:active': {
        backgroundColor: 'red',

        ViewButton: {
          backgroundColor: 'white',
          color: 'red',
        },
      },

      Title: {
        fontSize: '16px',
        fontWeight: '500',
      },

      Caption: {
        marginTop: '10px',
        fontSize: '16px',
      },

      ViewButton: {
        marginTop: '40px',
        color: 'white',
        fontSize: '16px',
        border: '3px solid white',
        textTransform: 'capitalize',
        transition: '200ms',
      },
    },
  },
}));

function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : 'left';
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  const classes = useStyles();

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key='content'>
      <CardContent className={classes.Banner.Content}>
        <Typography className={classes.Banner.Title}>
          {props.item.Name}
        </Typography>

        <Typography className={classes.Banner.Caption}>
          {props.item.Caption}
        </Typography>

        <Button variant='outlined' className={classes.Banner.ViewButton}>
          View Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia
          className={classes.Banner.Media}
          image={item.Image}
          title={item.Name}
        >
          <Typography className={classes.Banner.Media.MediaCaption}>
            {item.Name}
          </Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === 'left') {
    items.unshift(content);
  } else if (contentPosition === 'right') {
    items.push(content);
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className={classes.Banner}>
      <Grid container spacing={0} className={classes.Banner.BannerGrid}>
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: 'Electronics',
    Caption: 'Electrify your friends!',
    contentPosition: 'left',
    Items: [
      {
        Name: 'Macbook Pro',
        Image: 'https://source.unsplash.com/featured/?macbook',
      },
      {
        Name: 'iPhone',
        Image: 'https://source.unsplash.com/featured/?iphone',
      },
    ],
  },
  {
    Name: 'Home Appliances',
    Caption: 'Say no to manual home labour!',
    contentPosition: 'middle',
    Items: [
      {
        Name: 'Washing Machine WX9102',
        Image: 'https://source.unsplash.com/featured/?washingmachine',
      },
      {
        Name: 'Learus Vacuum Cleaner',
        Image: 'https://source.unsplash.com/featured/?vacuum,cleaner',
      },
    ],
  },
  {
    Name: 'Decoratives',
    Caption: 'Give style and color to your living room!',
    contentPosition: 'right',
    Items: [
      {
        Name: 'Living Room Lamp',
        Image: 'https://source.unsplash.com/featured/?lamp',
      },
      {
        Name: 'Floral Vase',
        Image: 'https://source.unsplash.com/featured/?vase',
      },
    ],
  },
];

function CarouselBanner() {
  const classes = useStyles();
  return (
    <div>
      <Carousel
        className={classes.Banner}
        autoPlay={false}
        timer={3000}
        animation={'slide'}
        indicators={true}
        timeout={10}
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInVisible={false}
        next={(now, previous) =>
          console.log(
            `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`,
          )
        }
        prev={(now, previous) =>
          console.log(
            `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`,
          )
        }
        onChange={(now, previous) =>
          console.log(
            `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`,
          )
        }
      >
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
