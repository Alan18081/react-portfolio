import React from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

import Email from '../Email';

import classes from './index.sass';

const emailList = ({list,remove}) => (
  <TransitionGroup className={classes.container} component="ul">
    {list.map(email => (
      <CSSTransition
        key={email.get('_id')}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: classes.itemEnter,
          enterActive: classes.itemEnterActive,
          exit: classes.itemExit,
          exitActive: classes.itemExitActive
        }}
      >
        <Email
          name={email.get('name')}
          email={email.get('email')}
          message={email.get('message')}
          date={new Date(email.get('date')).toLocaleDateString()}
          remove={() => remove(email.get('_id'))}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default emailList;