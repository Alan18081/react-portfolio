import React, {Component} from 'react';

import classes from './index.sass';

import SectionHeader from '../../components/SectionHeader';
import AddItem from '../../components/AddItem';

import RemoveIcon from '../../assets/icons/delete-button.svg';

class AdminSkillSection extends Component {
  state = {
    addingSkill: false
  };
  toggleAddField = () => {
    this.setState({
      addingSkill: !this.state.addingSkill
    })
  };
  render() {
    const {name,skills,removeCategory,removeSkill} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.head}>
          <SectionHeader clicked={this.toggleAddField}>{name}</SectionHeader>
          <button className={classes.remove} onClick={() => removeCategory(name)}>
            <RemoveIcon className={classes.removeIcon}/>
          </button>
        </div>
        <ul className={classes.list}>
          {skills.map(skill => (
            <li key={skill.get('_id')} className={classes.skill}>
              {skill.get('name')}
              <input
                maxLength={3}
                max={100}
                min={0}
                type="text"
                className={classes.input}
                placeholder="Number"
                value={skill.get('value')}
                onChange={({target: {value}}) => this.props.changeSkill(name,skill.get('name'),value)}
              />
              <button className={classes.remove} onClick={() => removeSkill(name,skill.get('name'))}>
                <RemoveIcon className={classes.removeIcon}/>
              </button>
            </li>
          ))}
        </ul>
        <AddItem
          toggleIn={this.state.addingSkill}
          title="Skill"
          add={(skill) => this.props.addSkill(name,skill)}
          close={this.toggleAddField}
        />
      </div>
    )
  }
}

export default AdminSkillSection;