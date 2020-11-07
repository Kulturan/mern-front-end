import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Link as LinkRouter } from 'react-router-dom';

import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Logo from '../assets/image/logo.png';

import { navMenus, navAccount, mobileMenus } from '../data/drawerMenu';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth + theme.spacing(4),
      flexShrink: 0,
    },
  },
  appBar: {
    boxShadow: theme.shadows[0],
    background: 'none',

    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth + theme.spacing(4)}px)`,
      marginLeft: drawerWidth + theme.spacing(4),
    },
  },
  brandLogo: {
    padding: theme.spacing(2),
    objectFit: 'contain',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth + theme.spacing(4),
  },
  customList: {
    padding: theme.spacing(2),
  },
  customItem: {
    borderRadius: '30px',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1),

    '&$selected': {
      background: theme.palette.primary.main,
      boxShadow: theme.shadows[4],

      '&:hover': {
        background: theme.palette.primary.light,
      },
    },
  },
  selected: {},
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const ElevationScroll = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const styleTheme = useTheme();
  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger
        ? styleTheme.palette.background.default
        : 'transparent',
    },
  });
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {mobileMenus[2].child.map((menu) => (
        <MenuItem key={menu.title} onClick={handleMenuClose}>
          {menu.title}
        </MenuItem>
      ))}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {mobileMenus.map((mobileMenu, index) => (
        <MenuItem
          key={mobileMenu.title}
          onClick={mobileMenu.title === 'Profil' ? handleProfileMenuOpen : null}
        >
          <IconButton
            aria-label={mobileMenu.ariaLabel}
            aria-controls={mobileMenu.ariaControls}
            aria-haspopup={mobileMenu.ariaHaspopup}
            color='inherit'
          >
            <Badge badgeContent={mobileMenu.badgeContent} color='secondary'>
              {mobileMenu.icon}
            </Badge>
          </IconButton>
          <p>{mobileMenu.title}</p>
        </MenuItem>
      ))}
    </Menu>
  );

  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar} />
      <img
        src={Logo}
        alt='kulturan-logo'
        className={classes.brandLogo}
        height='60'
      />
      <Divider />
      <List dense={true} className={classes.customList}>
        {navMenus.map((navItem, index) => (
          <ListItem
            button
            classes={{
              root: classes.customItem,
              selected: classes.selected,
            }}
            component={LinkRouter}
            to={navItem.link}
            key={navItem.title}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <ListItemIcon>{navItem.icon}</ListItemIcon>
            <ListItemText primary={navItem.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List dense={true} className={classes.customList}>
        {navAccount.map((navItem, index) => (
          <ListItem
            button
            classes={{
              root: classes.customItem,
              selected: classes.selected,
            }}
            component={LinkRouter}
            to={navItem.link}
            key={navItem.title}
            selected={selectedIndex === navMenus.length + index}
            onClick={(event) =>
              handleListItemClick(event, navMenus.length + index)
            }
          >
            <ListItemIcon>{navItem.icon}</ListItemIcon>
            <ListItemText primary={navItem.title} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {mobileMenus.map((mobileMenu, index) => (
                <IconButton
                  key={mobileMenu.title}
                  aria-label={mobileMenu.ariaLabel}
                  aria-controls={mobileMenu.ariaControls}
                  aria-haspopup={mobileMenu.ariaHaspopup}
                  color='inherit'
                  onClick={
                    mobileMenu.title === 'Profil' ? handleProfileMenuOpen : null
                  }
                >
                  <Badge
                    badgeContent={mobileMenu.badgeContent}
                    color='secondary'
                  >
                    {mobileMenu.icon}
                  </Badge>
                </IconButton>
              ))}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {renderMobileMenu}
      {renderMenu}
      <nav className={classes.drawer} aria-label='navigation menus'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}

export default ResponsiveDrawer;
