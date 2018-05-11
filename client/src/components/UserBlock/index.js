import React from 'react';
import {Link} from 'react-router-dom';

import classes from './index.sass';

import Button from '../UI/Button';

const userBlock = ({name,profession,avatar}) => (
  <div className={classes.container}>
    <div className={classes.avatar}>
      <img src={avatar} alt="Avatar"/>
    </div>
    <div className={classes.caption}>
      <h1 className={classes.name}>{name}</h1>
      <div className={classes.profession}>{profession}</div>
      <Link to="/profile">
        <Button white>Profile</Button>
      </Link>
    </div>
  </div>
);

export default userBlock;