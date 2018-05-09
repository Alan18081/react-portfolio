import React, {Component} from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

import classes from './index.sass';

import SectionHeader from '../../components/SectionHeader';
import AddItem from '../../components/AddItem';

import GearIcon from '../../assets/icons/settings.svg';
import RemoveIcon from '../../assets/icons/delete-button.svg';

class AddFunctions extends Component {
  state = {
    functions: [],
    shownAddFunction: false
  };
  componentDidMount() {
    if(this.props.edit) {
      this.setState({
        functions: this.props.functions,
        shownAddFunction: false
      });
    }
  }
  toggleAddingFunction = () => {
    this.setState({
      ...this.state,
      shownAddFunction: !this.state.shownAddFunction
    });
  };
  addFunction = (func) => {
    const functions = this.state.functions;
    functions.push(func);
    this.setState({
      ...this.state,
      functions
    });
    this.props.add(func);

  };
  removeFunction = (index) => {
    const functions = this.state.functions;
    functions.splice(index,1);
    this.setState({
      ...this.state,
      functions
    });
    this.props.remove(index);
  };
  render() {
    return (
      <div>
        <SectionHeader clicked={this.toggleAddingFunction}>Core functionality</SectionHeader>
        <TransitionGroup>
          {this.state.functions.map((func,i) => (
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
              <div className={classes.function}>
                <GearIcon className={classes.functionIcon}/>
                {func}
                <div className={classes.remove} onClick={() => this.removeFunction(i)}>
                  <RemoveIcon className={classes.removeIcon}/>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <AddItem
          title="Function"
          toggleIn={this.state.shownAddFunction}
          add={this.addFunction}
          close={this.toggleAddingFunction}
        />
      </div>
    );
  }
}


export default AddFunctions;