import React from 'react';
import {connect} from 'react-redux';

import classes from './index.sass';

import Header from '../../containers/Header';
import UserBlock from '../UserBlock';

const mainPage = ({profile}) => (
  <div className={classes.container} style={{
    backgroundImage: `url(./uploads/main_bg.jpg)`
  }}>
    <Header white/>
    <UserBlock
      name={profile.get('name')}
      profession={profile.get('profession')}
      avatar={profile.get('avatarUrl')}
    />
  </div>
);

const mapStateToProps = ({profile}) => ({
  profile: profile.get('data')
});

export default connect(mapStateToProps)(mainPage);