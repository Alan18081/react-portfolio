import React from 'react';

import classes from './index.sass';

import Subtitle from '../UI/Subtitle';

import GearIcon from '../../assets/icons/settings.svg';

const functions = ({list}) => {
  return list.size > 0 ? <div className={classes.functions}>
      <Subtitle>Core functionality</Subtitle>
      {list.map(item => (
        <div key={item} className={classes.function}>
          <GearIcon className={classes.icon}/>
          {item}
        </div>
      ))}
    </div> : null
};

export default functions;