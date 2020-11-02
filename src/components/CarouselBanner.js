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
    height: theme.spacing(50),
    position: 'relative',

    '& $Media': {
      backgroundColor: theme.palette.common.white,
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      transition: '300ms',
      cursor: 'pointer',
      '&:hover': {
        filter: 'brightness(115%)',
      },

      '& $MediaCaption': {
        textOverflow: 'ellipsis',
        position: 'absolute',
        bottom: '0',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        opacity: '0.6',
        width: '100%',
        fontWeight: theme.typography.fontWeightLight,
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
          opacity: '0.8',
        },
      },
    },

    '& $BannerGrid': {
      height: '100%',
    },

    '& $Content': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      height: '100%',
      cursor: 'pointer',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      transition: theme.transitions.duration.standard + 'ms',
      '&:hover, &:active': {
        backgroundColor: theme.palette.primary.main,

        '& $ViewButton': {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary.main,
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
  MediaCaption: {},
  BannerGrid: {},
  Content: {},
  ViewButton: {},
  Title: {},
  Caption: {},
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
      <CardContent className={classes.Content}>
        <Typography variant='h4' className={classes.Title}>
          {props.item.Name}
        </Typography>

        <Typography className={classes.Caption}>
          {props.item.Caption}
        </Typography>

        <Button variant='outlined' className={classes.ViewButton}>
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
          className={classes.Media}
          image={item.Image}
          title={item.Name}
        >
          <Typography className={classes.MediaCaption}>{item.Name}</Typography>
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
      <Grid container spacing={0} className={classes.BannerGrid}>
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: 'Bali Kulturalis',
    Caption: 'Nikmati pertunjukan penuh dengan khazanah budaya berkesan!',
    contentPosition: 'left',
    Items: [
      {
        Name: 'Tari Barong',
        Image:
          'https://images.unsplash.com/photo-1565970141926-c001afaf8577?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      },
      {
        Name: 'Tari Kecak',
        Image:
          'https://images.unsplash.com/photo-1511164657592-59a452023479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      },
    ],
  },
  {
    Name: 'Pesona Jawa',
    Caption: 'Jelajahi pesona dari jawa dengan pertunjukan menakjubkan!',
    contentPosition: 'middle',
    Items: [
      {
        Name: 'Tari Topeng',
        Image:
          'https://images.unsplash.com/photo-1508684602137-2fe4e5539fa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80',
      },
      {
        Name: 'Tari Srigati',
        Image:
          'https://images.unsplash.com/photo-1599551634107-95ce4e763232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
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
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselBanner;
