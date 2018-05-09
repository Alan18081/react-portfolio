import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {validateTech} from '../../utils/validate';

import Input from '../UI/Input';

import SaveIcon from '../../assets/icons/floppy-disk.svg';
import CloseIcon from '../../assets/icons/cancel.svg';

const addTech = ({toggleIn,close,add,handleSubmit,reset}) => {
  const submitAdd = (values) => {
    add(values);
    close();
    reset();
  };
  return (
    <CSSTransition
      in={toggleIn}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classes.addEnter,
        enterActive: classes.addEnterActive,
        exit: classes.addExit,
        exitActive: classes.addExitActive
      }}
    >
      <form onSubmit={handleSubmit(submitAdd)} className={classes.container}>
        <div className={classes.fields}>
          <Field name="name" component={Input} placeholder="Name"/>
          <Field name="icon" component={Input} placeholder="Icon name"/>
          <Field name="wordmark" component={Input} placeholder="Icon name with wordmark"/>
        </div>
        <div className={classes.controls}>
          <button className={classes.add}>
            <SaveIcon className={classes.icon}/>
          </button>
          <div className={classes.close} onClick={close}>
            <CloseIcon className={classes.icon}/>
          </div>
        </div>
      </form>
    </CSSTransition>
  );
};

export default reduxForm({
  form: 'addTech',
  validate: validateTech
})(addTech);