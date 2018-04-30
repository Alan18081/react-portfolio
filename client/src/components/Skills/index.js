import React from 'react';

import classes from  './index.sass';

import Title from '../UI/Title';
import Skill from '../Skill';

const skills = ({skills}) => (
  <section className={classes.container}>
    <Title>Skills</Title>
    <ul className={classes.sectionList}>
      <div className={classes.section}>
        <h3 className={classes.title}>Front-end</h3>
        <ul>
          <Skill
            name="HTML5"
            value="10"
          />
        </ul>
      </div>
      <div className={classes.section}>
        <h3 className={classes.title}>Front-end</h3>
        <ul className={classes.skillsList}>
          <Skill
            name="HTML5"
            value="10"
          />
          <Skill
            name="CSS3"
            value="50"
          />
        </ul>
      </div>
    </ul>
  </section>
);

export default skills;