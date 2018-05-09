import React from 'react';
import {Link} from 'react-router-dom';

import classes from './index.sass';

import LoupeIcon from '../../assets/icons/search.svg';

import Title from '../../components/UI/Title';

const projectSlide = ({id,name,image,technologies}) => (
  <Link to={`/projects/${id}`} className={classes.container}>
    <div className={classes.more}>
      <LoupeIcon className={classes.moreIcon}/>
      Узнать больше
    </div>
    <img className={classes.image} src={`/uploads/projects/${name}/${image}`} alt={name}/>
    <div className={classes.caption}>
      <Title white>{name}</Title>
      <ul className={classes.techList}>
        {technologies.map(tech => (
          <li className={classes.techItem} key={tech.get('_id')}>
            <i className={[classes.techIcon,`devicon-${tech.get('wordmark')}`].join(' ')}></i>
          </li>
        ))}
      </ul>
    </div>
  </Link>
);

export default projectSlide;