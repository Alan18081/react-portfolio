import React from 'react';

import classes from './index.sass';

import Header from '../../containers/Header';

const layout = ({white,children}) => (
  <div>
    <Header white={white}/>
    <main className={classes.content}>
      {children}
    </main>
  </div>
);

export default layout;