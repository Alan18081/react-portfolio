import React from 'react';

import classes from './index.sass';

import Header from '../../containers/Header';
import UserBlock from '../UserBlock';

const mainPage = () => (
  <div className={classes.container} style={{
    backgroundImage: `url(./uploads/main_bg.jpg)`
  }}>
    <Header white/>
    <UserBlock/>
  </div>
);

export default mainPage;