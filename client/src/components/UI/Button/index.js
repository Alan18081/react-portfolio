import React from 'react';

import classes from './index.sass';

const button = ({children,white,plain,offset,full,clicked,disabled}) => {
  const cssClasses = [
    plain ? classes.plain : classes.button,
    white ? classes.white : '',
    offset ? classes.offset : '',
    full ? classes.full : ''
  ];
  return (
    <button
      onClick={clicked}
      className={cssClasses.join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default button;