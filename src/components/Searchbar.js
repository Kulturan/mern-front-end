import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper elevation={4} component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Cari Wisata Lokal'
        inputProps={{ 'aria-label': 'cari wisata lokal' }}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton
        color='primary'
        className={classes.iconButton}
        aria-label='directions'
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
