import React from 'react';

class UserPhoto extends React.Component {
  constructor(props) {
    super();
    this.size = props.hasOwnProperty('size') ? '' + props.size : '160px';
    this.profileIMGLink = props.hasOwnProperty('src')
      ? '' + props.src
      : 'https://source.unsplash.com/random';
    this.useStyles = {
      profilePhotoFrame: {
        background:
          'linear-gradient(315deg, #00B3BE 15%, #6F0578 20%, transparent 55%),' +
          'linear-gradient(45deg, #00B3BE 15%, #6F0578 20%, transparent 55%),' +
          'radial-gradient(110.65% 110.65% at 50.18% 14.62%, #FF498B 0%, #6F0578 100%, transparent 0%)',
        width: this.size,
        height: this.size,
        borderRadius: '50%',
        padding: '13px',
        textAlign: 'center',
        fontSize: '2rem',
      },
    };
  }
  render() {
    return (
      <img
        src={this.profileIMGLink}
        alt='User profile'
        style={this.useStyles.profilePhotoFrame}
      />
    );
  }
}

export default UserPhoto;
