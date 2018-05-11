import React from 'react';

import classes from './index.sass';

import PictureIcon from '../../assets/icons/picture.svg';

const imageField = ({folder,src,changeImage,children,defaultSrc}) => (
  <div className={classes.container}>
    <div className={classes.image}>
      <img src={src || defaultSrc} alt="User"/>
    </div>
    <div className={classes.input}>
      <input type="file" className={classes.field} onChange={changeImage}/>
      <button className={classes.button}>
        <PictureIcon className={classes.icon}/>
        {children}
      </button>
    </div>
  </div>
);

export default imageField;