import React from 'react';

import classes from './index.sass';

import Subtitle from '../UI/Subtitle';

import GearIcon from '../../assets/icons/settings.svg';

const functions = ({list}) => (
  <div className={classes.functions}>
    <Subtitle>Core functionality</Subtitle>
    {list.map(item => (
      <div className={classes.function}>
        <GearIcon className={classes.icon}/>
        {item}
      </div>
    ))}
  </div>
);

export default functions;