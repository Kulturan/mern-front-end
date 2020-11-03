import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';

import WhatshotIcon from '@material-ui/icons/Whatshot';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { CarouselBanner } from '../../components';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(20, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
  },
  cardMedia: {
    height: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  horizontalCard: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridListTile: {
    borderRadius: theme.spacing(1),
  },
  gridListItem: {
    display: 'block',
    position: 'relative',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  wrapIcon: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const cardItems = [
  {
    title: 'Title1',
    description: 'desc1',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Title2',
    description: 'desc2',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Title3',
    description: 'desc3',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Title4',
    description: 'desc4',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Title5',
    description: 'desc5',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Title6',
    description: 'desc6',
    image: 'https://source.unsplash.com/random',
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CarouselBanner />
      <Container>
        <Typography variant='h5' className={classes.wrapIcon}>
          <WhatshotIcon />
          Trending
        </Typography>
        <div className={classes.horizontalCard}>
          <GridList className={classes.gridList} cols={3}>
            {cardItems.map((item) => (
              <GridListTile
                classes={{ tile: classes.gridListTile }}
                key={item.title}
              >
                <img src={item.image} alt={item.title} />
                <Typography variant='h6'>{item.title}</Typography>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </React.Fragment>
  );
}
