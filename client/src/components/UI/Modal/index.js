import React from 'react';

import classes from './index.sass';

import CloseIcon from '../../../assets/icons/cancel.svg';

const modal = ({children,close}) => (
  <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.close} onClick={close}>
        <CloseIcon className={classes.icon}/>
      </div>
      {children}
    </div>
  </div>
);

export default modal;