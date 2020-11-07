import React from 'react';

import { Avatar, Badge, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  profilePhotoFrame: {
    // background:
    //   'linear-gradient(315deg, #00B3BE 15%, #6F0578 20%, transparent 55%),' +
    //   'linear-gradient(45deg, #00B3BE 15%, #6F0578 20%, transparent 55%),' +
    //   'radial-gradient(110.65% 110.65% at 50.18% 14.62%, #FF498B 0%, #6F0578 100%, transparent 0%)',
    width: 240,
    height: 240,
  },
}));

export default function UserPhoto(props) {
  const classes = useStyles();
  const profilePhotoLink = props.hasOwnProperty('src')
    ? '' + props.src
    : 'https://source.unsplash.com/random';

  return (
    <React.Fragment>
      <Badge
        overlap='circle'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={
          <React.Fragment>
            <input
              accept='image/*'
              className={classes.input}
              id='icon-button-file'
              type='file'
            />
            <label htmlFor='icon-button-file'>
              <IconButton
                color='grey'
                aria-label='upload picture'
                component='span'
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </React.Fragment>
        }
      >
        <Avatar
          src={profilePhotoLink}
          className={classes.profilePhotoFrame}
          alt='User profile'
        />
      </Badge>
    </React.Fragment>
  );
}
