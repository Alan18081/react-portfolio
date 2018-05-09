import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './index.sass';
import {
  fetchSkills,
  saveSkills,
  addCategory,
  addSkill,
  updateSkill,
  removeCategory,
  removeSkill,
  resetSkills
} from '../../actions'

import Admin from '../Admin';
import AdminNav from '../../components/AdminNav/index';
import Panel from '../../components/UI/Panel/index';
import AdminSkillSection from '../AdminSkillSection/index';
import AddItem from '../../components/AddItem';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import Controls from '../../components/UI/Controls';

import AddIcon from '../../assets/icons/plus.svg';

class AdminSkills extends Component {
  state = {
    addingCategory: false
  };
  componentDidMount() {
    this.props.onFetchSkills();
  }
  toggleAddingCategory = () => {
    this.setState({
      addingCategory: !this.state.addingCategory
    })
  };
  render() {
    const {skills,onSaveSkills,onResetSkills,onAddCategory} = this.props;
    let content = <Spinner size={12}/>;
    if(skills) {
      content = <Panel>
        {skills.map(category => (
          <AdminSkillSection
            key={category.get('_id')}
            id={category.get('_id')}
            name={category.get('name')}
            skills={category.get('skills')}
            addSkill={this.props.onAddSkill}
            changeSkill={this.props.onUpdateSkill}
            removeCategory={this.props.onRemoveCategory}
            removeSkill={this.props.onRemoveSkill}
          />
        ))}
        <button className={classes.addCategory} onClick={this.toggleAddingCategory}>
          <AddIcon className={classes.icon}/>
          Add category
        </button>
        <AddItem
          toggleIn={this.state.addingCategory}
          title="Category"
          add={onAddCategory}
          close={this.toggleAddingCategory}
        />
        <Controls>
          <Button clicked={onSaveSkills}>Save skills</Button>
          <Button plain offset clicked={onResetSkills}>Set old values</Button>
        </Controls>
      </Panel>;
    }
    return (
      <Admin>
        <AdminNav/>
        {content}
      </Admin>
    );
  }
}

const mapStateToProps = ({skills}) => ({
  loading: skills.get('loading'),
  skills: skills.get('list')
});

const mapDispatchToProps = dispatch => ({
  onFetchSkills: () => dispatch(fetchSkills()),
  onSaveSkills: () => dispatch(saveSkills()),
  onResetSkills: () => dispatch(resetSkills()),
  onAddCategory: (category) => dispatch(addCategory(category)),
  onAddSkill: (categoryName,skillName) => dispatch(addSkill(categoryName,skillName)),
  onRemoveCategory: (name) => dispatch(removeCategory(name)),
  onRemoveSkill: (categoryName,skillName) => dispatch(removeSkill(categoryName,skillName)),
  onUpdateSkill: (categoryName,skillName,number) => dispatch(updateSkill(categoryName,skillName,number))
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminSkills);