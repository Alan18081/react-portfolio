import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

import classes from './index.sass';
import {addTech,removeTech} from '../../actions';

import SectionHeader from '../../components/SectionHeader/index';
import Tech from '../../components/Tech/index';
import AddTech from '../../components/AddTech/index';

class AdminTechnologies extends Component {
  state = {
    shownAddingTech: false
  };
  toggleAddingTech = () => {
    this.setState({
      shownAddingTech: !this.state.shownAddingTech
    })
  };
  render() {
    const {onRemoveTech,onAddTech,list,loading} = this.props;
    return (
      <div className={classes.container}>
        <SectionHeader clicked={this.toggleAddingTech}>Your technologies</SectionHeader>
        <ul className={classes.list}>
          <TransitionGroup component="ul" className={classes.list}>
            {list.map(tech => (
              <CSSTransition
                key={tech.get('icon')}
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
                <Tech
                  name={tech.get('name')}
                  icon={tech.get('icon')}
                  remove={() => onRemoveTech(tech.get('_id'))}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
        <AddTech
          toggleIn={this.state.shownAddingTech}
          close={this.toggleAddingTech}
          add={onAddTech}
          loading={loading}
        />
      </div>
    )
  }
}

const mapStateToProps = ({tech}) => ({
  loading: tech.get('loading')
});

const mapDispatchToProps = dispatch => ({
  onAddTech: (tech) => dispatch(addTech(tech)),
  onRemoveTech: (id) => dispatch(removeTech(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminTechnologies);