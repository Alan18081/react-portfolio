import React from 'react';

import classes from './index.sass';

import Title from '../UI/Title';
import Button from '../UI/Button';

import GithubIcon from '../../assets/icons/github-logo.svg';

const userInfo = ({image,name,profession,story,github}) => (
  <section className={classes.container}>
    <div className={classes.image}>
      <img src={`/uploads/profile/${image}`} alt="Author"/>
    </div>
    <div className={classes.info}>
      <Title name>{name}</Title>
      <h4 className={classes.profession}>{profession}</h4>
      <p className={classes.story}>{story}</p>
      <div className={classes.controls}>
        <Button>Download resume</Button>
        <a href={github} target="_blank" className={classes.github}>
          <GithubIcon className={classes.icon}/>
          My code
        </a>
      </div>
    </div>
  </section>
);

export default userInfo;