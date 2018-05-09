import React from 'react';

import classes from './index.sass';

import Subtitle from '../UI/Subtitle';

const stats = ({emailsSize,lastData,projectsSize}) => (
  <div className={classes.container}>
    <Subtitle offset>Stats</Subtitle>
    <p className={classes.info}>
      You have received <span className={classes.data}>{emailsSize}</span> emails
    </p>
    <p>
      You have <span className={classes.data}>{projectsSize}</span> projects
    </p>
  </div>
);

export default stats;