import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
});

const navmenus = [
  {
    title: "Kota",
    links: "/kota"
  },
  {
    title: "About",
    links: "/tentang"
  }
]

class Navbar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
        <AppBar position="fixed" color="primary" elevation={4} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Trind
            </Typography>
            <nav>
              {navmenus.map((navmenu) => (
                <Link variant="button" color="inherit" component={LinkRouter} to={navmenu.links} className={classes.link}>
                  {navmenu.title}
                </Link>
              ))}
            </nav>
            <Button href="#" color="inherit" variant="outlined" className={classes.link}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        );
    }
}

export default withStyles(useStyles)(Navbar);