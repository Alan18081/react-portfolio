import React from 'react';

import classes from './index.sass';

import Subtitle from '../UI/Subtitle';

import AddIcon from '../../assets/icons/plus.svg';

const sectionHeader = ({children,clicked}) => (
  <div className={classes.container}>
    <Subtitle>{children}</Subtitle>
    <div className={classes.add} onClick={clicked}>
      <AddIcon className={classes.icon}/>
    </div>
  </div>
);

export default sectionHeader;