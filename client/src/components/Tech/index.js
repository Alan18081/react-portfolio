import React from 'react';

import classes from './index.sass';

import DeleteIcon from '../../assets/icons/delete-button.svg';

const tech = ({name,icon,remove}) => (
  <li className={classes.container}>
    <i className={[classes.icon, `devicon-${icon}`].join(' ')}></i>
    {name}
    <button className={classes.remove} onClick={remove}>
      <DeleteIcon className={classes.removeIcon}/>
    </button>
  </li>
);

export default tech;