import React from 'react';

import classes from './index.sass';

const button = ({children,white}) => (
  <button
    className={[classes.button,white && classes.white].join(' ')}
  >
    {children}
  </button>
);

export default button;