import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
  gridItem: {
    tile: {
      borderRadius: '16px',
    },
  },
}));

const image = 'https://source.unsplash.com/random';

const tileData = [
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile
            className={classes.gridItem}
            key={tile.img}
            cols={tile.cols || 1}
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
