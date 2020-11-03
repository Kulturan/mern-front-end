import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FaceIcon from '@material-ui/icons/Face';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const navMenus = [
  {
    title: 'Beranda',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Pesanan',
    link: '/pesanan',
    icon: <FormatListBulletedIcon />,
  },
  {
    title: 'Favorit',
    link: '/favorit',
    icon: <FavoriteIcon />,
  },
  {
    title: 'Pentasku',
    link: '/pentasku',
    icon: <FaceIcon />,
  },
];

const navAccount = [
  {
    title: 'Akun',
    link: '/akun',
    icon: <PersonIcon />,
  },
  {
    title: 'Pengaturan',
    link: '/pengaturan',
    icon: <SettingsIcon />,
  },
];

const mobileMenus = [
  {
    title: 'Pesan',
    ariaLabel: 'buka 4 pesan baru',
    icon: <MailIcon />,
    badgeContent: 4,
  },
  {
    title: 'Notifikasi',
    ariaLabel: 'buka 11 notifikasi',
    icon: <NotificationsIcon />,
    badgeContent: 11,
  },
  {
    title: 'Profil',
    ariaLabel: 'akun ',
    ariaControls: 'primary-search-account-menu',
    ariaHaspopup: 'true',
    icon: <AccountCircle />,
    child: [
      {
        title: 'Profil',
      },
      {
        title: 'Akun',
      },
    ],
  },
];

export { navMenus, navAccount, mobileMenus };
