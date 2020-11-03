import React from 'react';

import {
  Typography,
  Grid,
  Paper,
  IconButton,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ShareIcon from '@material-ui/icons/Share';
import TheatersIcon from '@material-ui/icons/Theaters';

import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
    background: theme.palette.primary.main,
  },
  container: {
    // Mobile
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(4),
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8),
    },
  },
  divider: {
    margin: theme.spacing(0, 1),
  },
  header: {
    margin: theme.spacing(2, 0),
  },
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%',
  },
  recommendation: {
    marginTop: theme.spacing(2),
    paddingTop: '56.25%',
    borderRadius: 14,
  },
  ticket: {
    height: 400,
    width: '100%',
    marginBottom: theme.spacing(2),
    borderRadius: 16,
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={8}>
            {/* Video */}
            <div className={classes.playerWrapper}>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=zj5Aucgvluo'
                controls
                width='100%'
                height='100%'
                className={classes.player}
              />
            </div>
            {/* End video */}
            {/* Header */}
            <Grid container justify='space-between' className={classes.header}>
              <Grid item xs={10}>
                {/* Title */}
                <Typography variant='h3' component='h1'>
                  Tari Kecak
                </Typography>
                {/* End title */}
                {/* Classification */}
                <Grid container alignItems='center'>
                  <Typography variant='subtitle1' component='p'>
                    2020
                  </Typography>
                  <Divider
                    orientation='vertical'
                    flexItem
                    className={classes.divider}
                  />
                  <Typography variant='subtitle1' component='p'>
                    13+
                  </Typography>
                  <Divider
                    orientation='vertical'
                    flexItem
                    className={classes.divider}
                  />
                  <Typography variant='subtitle1' component='p'>
                    Tari Tradisional
                  </Typography>
                </Grid>
                {/* End classification */}
              </Grid>
              {/* End video */}
              {/* Icons */}
              <Grid item xs={2} justify='flex-end'>
                <IconButton>
                  <TheatersIcon />
                </IconButton>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
              </Grid>
              {/* End icons */}
            </Grid>
            {/* End header */}
            {/* Description */}
            <Typography variant='body1' component='p'>
              Tari kecak adalah pertunjukan dramatari seni khas Bali yang lebih
              utama menceritakan mengenai Ramayana dan dimainkan terutama oleh
              laki-laki. Tarian ini dipertunjukkan oleh banyak (puluhan atau
              lebih) penari laki-laki yang duduk berbaris melingkar dan dengan
              irama tertentu menyerukan "cak" dan mengangkat kedua lengan,
              menggambarkan kisah Ramayana saat barisan kera membantu Rama
              melawan Rahwana. Namun, Kecak berasal dari ritual sanghyang, yaitu
              tradisi tarian yang penarinya akan berada pada kondisi tidak
              sadar.
            </Typography>
            {/* End description */}
          </Grid>
          {/* Ticket and recommendation */}
          <Grid item xs={12} sm={4}>
            <Paper className={classes.ticket}>E-ticket </Paper>
            <Typography variant='h5' component='h3'>
              Mungkin Anda juga suka
            </Typography>
            <Paper className={classes.recommendation}>Video lain </Paper>
          </Grid>
          {/* End ticket and recommendation */}
        </Grid>
      </div>
    </div>
  );
}
