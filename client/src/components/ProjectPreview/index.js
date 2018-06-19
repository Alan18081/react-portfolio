import React from 'react';

import classes from './index.sass';

import LoupeIcon from '../../assets/icons/search.svg';

const projectPreview = ({image,name,showSlide}) => (
  <div className={classes.container} onClick={showSlide}>
    <div className={classes.content}>
      <div className={classes.overlay}>
        <LoupeIcon className={classes.icon}/>
        <h5 className={classes.name}>{name}</h5>
      </div>
      <img className={classes.image} src={image} alt="Project"/>
    </div>
  </div>
);

export default projectPreview;