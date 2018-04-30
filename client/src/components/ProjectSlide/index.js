import React from 'react';
import {Link} from 'react-router-dom';

import classes from './index.sass';

import Title from '../../components/UI/Title';

const projectSlide = ({id,name,image,technologies}) => (
  <Link to={`/projects/${id}`} className={classes.container}>
    <img className={classes.image} src={`/uploads/${image}`} alt={name}/>
    <div className={classes.caption}>
      <Title white>{name}</Title>
      <ul className={classes.techList}>
        {technologies.map(tech => (
          <li className={classes.techItem}>
            <i className={[classes.techIcon,`devicon-${tech}`].join(' ')}></i>
          </li>
        ))}
      </ul>
    </div>
  </Link>
);

export default projectSlide;