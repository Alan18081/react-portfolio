import React from 'react';

import classes from './index.sass';

const panel = ({children,animated = true}) => (
  <div className={[classes.container,animated ? classes.animated : ''].join(' ')}>
    {children}
  </div>
);

export default panel;