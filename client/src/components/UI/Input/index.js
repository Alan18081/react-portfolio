import React from 'react';

import classes from './index.sass';

import ErrorIcon from '../../../assets/icons/error.svg';

const input = ({input,meta: {error,touched},type,placeholder}) => {
  const cssClasses = [classes.input,
    type === 'textarea' ? classes.textarea : '',
    error && touched ? classes.inputError : ''
  ];
  let inputElem = <input
    className={cssClasses.join(' ')}
    type={type || 'text'}
    {...input}
    placeholder={placeholder}
  />;
  if(type === 'textarea') {
    inputElem = <textarea
      className={cssClasses.join(' ')}
      cols="30"
      rows="10"
      {...input}
      placeholder={placeholder}
    ></textarea>
  }
  return (
    <div className={classes.container}>
      {inputElem}
      {error && touched && <div className={classes.error}>
        <ErrorIcon className={classes.errorIcon}/>
        {error}
      </div>}
    </div>
  )
};

export default input;