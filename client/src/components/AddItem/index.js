import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';

import classes from './index.sass';

import SaveIcon from '../../assets/icons/floppy-disk.svg';
import CloseIcon from '../../assets/icons/cancel.svg';

class AddItem extends Component {
  state = {
    value: '',
    error: null
  };
  validateInput = () => {
    if(this.state.value === '') {

    }
  };
  changeInput = ({target: {value}}) => {
    this.setState({
      value
    })
  };
  addItem = () => {
    this.props.add(this.state.value);
    this.props.close();
  };
  render() {
    const {toggleIn,title,close} = this.props;
    return  (
      <CSSTransition
        in={toggleIn}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: classes.addEnter,
          enterActive: classes.addEnterActive,
          exit: classes.addExit,
          exitActive: classes.addExitActive
        }}
      >
        <div className={classes.container}>
          <input className={classes.input} type="text" onChange={this.changeInput} onBlur={this.validateInput} placeholder={title}/>
          <div className={classes.controls}>
            <div className={classes.add} onClick={this.addItem}>
              <SaveIcon className={classes.icon}/>
            </div>
            <div className={classes.close} onClick={close}>
              <CloseIcon className={classes.icon}/>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
};

export default AddItem;