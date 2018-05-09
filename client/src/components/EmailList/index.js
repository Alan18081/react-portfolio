import React from 'react';
import {TransitionGroup} from 'react-transition-group';

import Email from '../Email';

import classes from './index.sass';

const emailList = ({list,remove}) => (
  <TransitionGroup className={classes.container}>
    {list.map(email => (
      <Email
        name={email.get('name')}
        email={email.get('email')}
        message={email.get('message')}
        date={new Date(email.get('date')).toLocaleDateString()}
        remove={() => remove(email.get('_id'))}
      />
    ))}
  </TransitionGroup>
);

export default emailList;