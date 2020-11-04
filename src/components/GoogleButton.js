import React from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import GoogleIcon from '../assets/icon/google-icon.png';

const useStyles = makeStyles((theme) => ({
  googleButton: {
    justifyContent: 'start',
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(1),
    color: '#000',
    backgroundColor: '#fff',
    textTransform: 'none',
    fontFamily: 'Roboto',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: theme.palette.grey[500],
    },
  },
  logo: {
    // Mobile
    [theme.breakpoints.up('xs')]: {
      marginRight: theme.spacing(5),
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(10),
    },
  },
}));

export default function GoogleButton() {
  const classes = useStyles();

  return (
    <>
      <Button
        variant='contained'
        type='submit'
        className={classes.googleButton}
        size='large'
        fullWidth
      >
        <img
          src={GoogleIcon}
          alt='google-logo'
          height='22'
          width='22'
          className={classes.logo}
        />
        Daftar dengan Google
      </Button>
    </>
  );
}
