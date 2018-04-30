import React from 'react';

import classes from './index.sass';

const skill = ({name,value}) => (
  <div className={classes.container}>
    <svg viewBox="0 0 111 111">
      <circle
        r="45" cx="50%" cy="50%" fill="none"
        className={classes.circle}
      />
      <circle
        r="45" cx="50%" cy="50%" fill="none"
        transform="rotate(-90 55.5 55.5)"
        className={classes.circleFilled}
        style={{
          strokeDasharray: `${282.6 * value / 100} 282.6`
        }}
      />
    </svg>
    <div className={classes.name}>{name}</div>
  </div>
);

export default skill;