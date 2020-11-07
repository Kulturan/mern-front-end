import React from 'react';

import { Typography, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AuthTextField, GoogleButton } from '../../components';
import Background from '../../assets/image/auth.png';
import Logo from '../../assets/image/logo.png';

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
    width: '100%',
    background: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // Mobile
    [theme.breakpoints.up('xs')]: {
      backgroundPosition: '40% 50%',
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '50% 70%',
    },
  },
  container: {
    // Mobile
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(8),
      margin: theme.spacing(0, 4),
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12),
      margin: theme.spacing(0, 16),
      maxWidth: '400px',
    },
  },
  footer: {
    marginTop: theme.spacing(10),
  },
  header: {
    // Mobile
    [theme.breakpoints.up('xs')]: {
      marginBottom: theme.spacing(6),
    },
    // Laptop
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(10),
    },
  },
  orText: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <header className={classes.header}>
          <Typography variant='h3' component='h1'>
            Masuk
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
              style={{ fontFamily: 'Roboto', fontWeight: 700 }}
            >
              Masuk
            </Button>
          </form>
          <Typography
            variant='caption'
            component='p'
            align='center'
            className={classes.orText}
          >
            atau
          </Typography>
          <GoogleButton />
          <Typography variant='caption' component='p' align='center'>
            Belum punya akun?{' '}
            <Link href='/register' color='inherit'>
              Buat akun
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
