import React from 'react';

import classes from './index.sass';

import Header from '../../containers/Header';

const layout = ({white,children,noMessage,admin}) => (
  <div>
    <Header white={white} noMessage={noMessage} admin={admin}/>
    <main className={classes.content}>
      {children}
    </main>
  </div>
);

export default layout;