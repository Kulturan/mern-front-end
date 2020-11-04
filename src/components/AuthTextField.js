import React from 'react';

import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Auth = withStyles((theme) => ({
  root: {
    display: 'block',
    marginBottom: theme.spacing(3),
    '& label': {
      color: 'white',
    },
    '&:hover label': {
      color: theme.palette.primary.main,
    },
    '& input': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(196,196,196,0.3)',
      width: '100%',
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .Mui-focused': {
      backgroundColor: 'transparent',
    },
  },
}))(TextField);

export default function AuthTextField(props) {
  return (
    <Auth
      label={props.label}
      type={props.type}
      variant='outlined'
      color='primary'
      size='normal'
    />
  );
}
