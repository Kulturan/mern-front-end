import React from 'react';

import { Typography, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AuthTextField } from '../../components';
import Background from '../../assets/image/auth.png';
import GoogleIcon from '../../assets/icon/google-icon.png';
import Logo from '../../assets/image/logo.png';

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
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
    },
    maxWidth: '400px',
  },
  footer: {
    marginTop: theme.spacing(10),
  },
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
      backgroundColor: '#777',
    },
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
              color='secondary'
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
          {/* Google button */}
          <Button
            variant='contained'
            color='secondary'
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
          {/* End google button */}
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
