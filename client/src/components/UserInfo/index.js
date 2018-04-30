import React from 'react';

import classes from './index.sass';

import Title from '../UI/Title';
import Button from '../UI/Button';

const userInfo = ({image,name,profession,story}) => (
  <section className={classes.container}>
    <div className={classes.image}>
      <img src={`/uploads/${image}`} alt="Author image"/>
    </div>
    <div className={classes.info}>
      <Title>{name}</Title>
      <h4 className={classes.profession}>{profession}</h4>
      <p className={classes.story}>{story}</p>
      <Button>Download resume</Button>
    </div>
  </section>
);

export default userInfo;