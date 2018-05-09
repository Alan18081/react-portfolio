import React from 'react';

import classes from  './index.sass';

import Title from '../UI/Title';
import Skill from '../Skill';
import Panel from '../UI/Panel';
import Subtitle from '../UI/Subtitle';

const skills = ({skills}) => (
  <section className={classes.container}>
    <Panel animated={false}>
      <Title>Skills</Title>
      <ul className={classes.sectionList}>
        {skills.map(category => (
          <li className={classes.section}>
            <Subtitle offset>{category.get('name')}</Subtitle>
            <ul>
              {category.get('skills').map(skill => (
                <Skill
                  name={skill.get('name')}
                  value={skill.get('value')}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Panel>
  </section>
);

export default skills;