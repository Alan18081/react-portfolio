import React from 'react';

import classes from './index.sass';

const title = ({white,children}) => (
 <h1
   className={[classes.title,white && classes.white].join(' ')}
 >
   {children}
 </h1>
);

export default title;