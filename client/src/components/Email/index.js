import React from 'react';
import {CSSTransition} from 'react-transition-group';

import classes from './index.sass';

import DeleteIcon from '../../assets/icons/delete-button.svg';
import UserIcon from '../../assets/icons/user.svg';
import EmailIcon from '../../assets/icons/internet-mail-arroba-sign-outline.svg';
import MessageIcon from '../../assets/icons/chat.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';

const email = ({name,email,message,date,remove}) => (
  <CSSTransition
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
    <li className={classes.container}>
      <button className={classes.remove} onClick={remove}>
        <DeleteIcon className={classes.removeIcon}/>
      </button>
      <div className={classes.item}>
        <UserIcon className={classes.icon}/>
        {name}
      </div>
      <div className={classes.item}>
        <EmailIcon className={classes.icon}/>
        {email}
      </div>
      <div className={classes.item}>
        <MessageIcon className={classes.icon}/>
        <p>{message}</p>
      </div>
      <div className={classes.item}>
        <CalendarIcon className={classes.icon}/>
        {date}
      </div>
    </li>
  </CSSTransition>
);

export default email;