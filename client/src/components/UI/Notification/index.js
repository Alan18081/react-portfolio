import React from 'react';

import classes from './index.sass';

const notification = ({children}) => (
  <div className={classes.container}>
    {children}
  </div>
);

export default notification;