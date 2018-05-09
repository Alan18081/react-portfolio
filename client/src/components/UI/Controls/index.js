import React from 'react';

import classes from './index.sass';

import Spinner from '../Spinner';

const controls = ({children,loading}) => (
  <div className={classes.container}>
    {children}
    <div className={classes.loader}>
      {loading && <Spinner size={3}/>}
    </div>
  </div>
);

export default controls;