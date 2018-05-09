import React from 'react';

import classes from './index.sass';

const spinner = ({size,center,left,top}) => {
  const cssClasses = [
    classes.loader,
    center ? classes.center : '',
    left ? classes.left : '',
    top ? classes.top : ''
  ];
  return (
    <div
      style={{
        fontSize: size
      }}
      className={cssClasses.join(' ')}
    ></div>
  );
};

export default spinner;