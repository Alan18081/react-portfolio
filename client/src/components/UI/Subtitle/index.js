import React from 'react';

import classes from './index.sass';

const subtitle = ({children,offset}) => (
  <h3 className={[classes.subtitle,offset ? classes.offset : ''].join(' ')}>{children}</h3>
);

export default subtitle;