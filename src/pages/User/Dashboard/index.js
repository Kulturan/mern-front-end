import {
  Grid,
  createMuiTheme,
  Typography,
  ThemeProvider,
  Input,
} from '@material-ui/core';
import React from 'react';
import { UserPhoto } from '../../../components';
import './style.css';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.user = {
      name: 'Amrizkuy',
      email: 'Amrizkuy@gmail.com',
      tLahir: '2 Juni 2001',
      domisili: 'Bojonegoro',
    };
    this.theme = createMuiTheme({
      typography: {
        h1: {
          fontFamily: 'Roboto',
          fontSize: '3.07rem',
          fontWeight: '500',
        },
        body1: {
          fontFamily: 'Raleway',
          fontWeight: 500,
          fontSize: '1.563rem',
          color: 'rgba(155,155,155,1)',
        },
        body2: {
          fontFamily: 'Raleway',
          fontWeight: 500,
          fontSize: '1.563rem',
          color: 'rgba(255,255,255,1)',
        },
        body4: {
          fontFamily: 'Raleway',
          fontWeight: 500,
          fontSize: '1.563rem',
          color: 'rgba(255,255,255,1)',
        },
      },
      inputStyles: {
        width: '9000px',
      },
    });
  }
  render() {
    return (
      <React.Fragment>
        <main>
          <ThemeProvider theme={this.theme}>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={1}
            >
              <Grid item xl={3}>
                <UserPhoto size='247px' />
              </Grid>
              <Grid item xl={5}>
                <Typography component='h1' variant='h1' align='center'>
                  Tinjauan Akun
                </Typography>
                <form>
                  <table>
                    <tr>
                      <td>
                        <label htmlFor={'user-name'}>
                          <Typography variant='body4' color='initial'>
                            Nama
                          </Typography>
                        </label>
                      </td>
                      <td>
                        <Input
                          id={'user-name'}
                          value={this.user.name}
                          disabled
                        ></Input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor={'user-email'}>Email</label>
                      </td>
                      <td>
                        <Input
                          id={'user-email'}
                          value={this.user.email}
                          type={'email'}
                          disabled
                        ></Input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor={'user-birth-place'}>Tempat Lahir</label>
                      </td>
                      <td>
                        <Input
                          id={'user-birth-place'}
                          value={this.user.tLahir}
                          disabled
                        ></Input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor={'user-place'}>Domisili</label>
                      </td>
                      <td>
                        <Input
                          id={'user-place'}
                          value={this.user.domisili}
                          disabled
                        ></Input>
                      </td>
                    </tr>
                  </table>
                </form>
              </Grid>
            </Grid>
          </ThemeProvider>
        </main>
      </React.Fragment>
    );
  }
}

export default Dashboard;
