import React from 'react';

import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SaveIcon from '@material-ui/icons/Save';

import { UserPhoto } from '../../../components';

const userData = [
  { label: 'Nama', type: 'text', defaultValue: 'Muhammad Rizqi Tsani' },
  { label: 'Email', type: 'email', defaultValue: 'rizqitsani@gmail.com' },
  { label: 'Password', type: 'password', defaultValue: '123456' },
];

const useStyles = makeStyles((theme) => ({
  avatar: {
    // Mobile
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  container: {
    // Mobile
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(4),
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 8),
    },
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1.5, 0),
  },
  saveButton: {
    marginTop: theme.spacing(3),
    // Mobile
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      width: 150,
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid item lg={3} className={classes.avatar}>
          <UserPhoto />
        </Grid>
        <Grid item lg>
          <Typography variant='h4' component='h1' className={classes.header}>
            Pengaturan Akun
          </Typography>
          <form>
            {userData.map((data, index) => (
              <TextField
                key={index}
                label={data.label}
                type={data.type}
                defaultValue={data.defaultValue}
                className={classes.textField}
                fullWidth
              />
            ))}
            <Button
              variant='contained'
              color='primary'
              size='large'
              startIcon={<SaveIcon />}
              className={classes.saveButton}
            >
              Save
            </Button>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
