import React from 'react';

import { Typography, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AuthTextField } from '../../components';
import Background from '../../assets/image/auth.png';
import Logo from '../../assets/image/logo.png';

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
    width: '100%',
    background: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('xs')]: {
      backgroundPosition: '40% 50%',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '50% 70%',
    },
  },
  container: {
    // Mobile
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(10),
      margin: theme.spacing(0, 4),
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(16),
      margin: theme.spacing(0, 16),
    },
    maxWidth: '400px',
  },
  footer: {
    marginTop: theme.spacing(16),
  },
  header: {
    marginBottom: theme.spacing(10),
  },
  orText: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Register() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <header className={classes.header}>
          <Typography variant='h3' component='h1'>
            Buat Akun
          </Typography>
        </header>
        <main>
          <form>
            <AuthTextField label='Email' type='email' />
            <AuthTextField label='Password' type='password' />
            <Button
              variant='contained'
              color='primary'
              fullWidth
              style={{ fontFamily: 'Roboto', fontWeight: 700, marginBottom: 8 }}
            >
              Daftar
            </Button>
          </form>
          <Typography variant='caption' component='p' align='center'>
            Sudah punya akun?{' '}
            <Link href='/login' color='inherit'>
              Masuk
            </Link>
          </Typography>
        </main>
        <footer className={classes.footer}>
          <img src={Logo} alt='kulturan-logo' height='30' />
        </footer>
      </div>
    </div>
  );
}
