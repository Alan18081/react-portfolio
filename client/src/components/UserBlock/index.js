import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import classes from './index.sass';

import Button from '../UI/Button';

const userBlock = ({name,profession,avatar}) => (
  <div className={classes.container}>
    <div className={classes.avatar}>
      <img src={`/uploads/${avatar}`} alt="Avatar"/>
    </div>
    <h1 className={classes.name}>{name}</h1>
    <div className={classes.profession}>{profession}</div>
    <Link to="/profile">
      <Button white>Profile</Button>
    </Link>
  </div>
);

const mapStateToProps = state => ({
  name: 'Alex Ostapiuk',
  profession: 'Front-end developer',
  avatar: 'avatar.jpg'
});

export default connect(mapStateToProps)(userBlock);