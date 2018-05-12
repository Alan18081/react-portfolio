import React from 'react';

import classes from './index.sass';

const notification = ({children,error}) => (
  <div className={[classes.container,error ? classes.error : ''].join(' ')}>
    {children}
  </div>
);

export default notification;