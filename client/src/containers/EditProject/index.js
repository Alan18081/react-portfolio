import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {validateProject} from '../../utils/validate';
import {editProject,setActiveProject,fetchProjects} from '../../actions/index';
import {getActiveProject} from '../../selectors';

import EditFileIcon from '../../assets/icons/edit_file.svg';

import Admin from '../Admin/index';
import Title from '../../components/UI/Title/index';
import Panel from '../../components/UI/Panel/index';
import Input from '../../components/UI/Input/index';
import AddFunctions from '../AddFunctions/index';
import Button from '../../components/UI/Button/index';
import SelectTechnologies from '../SelectTechnologies/index';
import EditImages from '../EditImages/index';
import LoadMainImage from '../LoadMainImage/index';
import Spinner from '../../components/UI/Spinner';

class EditProject extends Component {
  componentDidMount() {
    if(this.props.projects.size === 0) {
      this.props.onFetchProjects();
    }
    this.props.onSetActiveProject(this.props.match.params.id);
  }
  addFunction = (func) => {
    this.props.array.push('functions', func);
  };
  addMainImage = (file) => {
    this.props.change('mainImage', file);
  };
  removeFunction = (index) => {
    this.props.array.remove('functions', index);
  };
  selectTechnology = (tech) => {
    this.props.array.push('technologies', tech);
  };
  removeTechnology = (index) => {
    this.props.array.remove('technologies', index);
  };
  render() {
    const {
      handleSubmit,
      onSaveProject,
      initialValues,
      loading
    } = this.props;
    let content = <Spinner size={12} center/>;
    if(initialValues) {
      content = (
        <Admin>
          <Title Icon={EditFileIcon}>
            Edit Project
          </Title>
          <Panel>
            <form onSubmit={handleSubmit(onSaveProject)}>
              <Field name="projectName" component={Input} placeholder="Name of project"/>
              <Field name="appType" component={Input} placeholder="Type of project"/>
              <Field name="link" component={Input} placeholder="Link"/>
              <AddFunctions
                edit
                functions={initialValues.functions}
                add={this.addFunction}
                remove={this.removeFunction}
              />
              <LoadMainImage
                image={initialValues.mainImage}
                add={this.addMainImage}
              />
              <SelectTechnologies
                edit
                selected={initialValues.technologies.map(tech => tech._id)}
                select={this.selectTechnology}
                remove={this.removeTechnology}
              />
              <EditImages
                id={initialValues._id}
                images={initialValues.images}
              />
              <div className={classes.controls}>
                <Button disabled={loading}>Save project</Button>
                <Link to="/admin/projects">
                  <Button plain offset>Cancel</Button>
                </Link>
              </div>
            </form>
          </Panel>
        </Admin>
      )
    }
    return content;
  }
};

const mapStateToProps = ({projects}) => ({
  loading: projects.get('loading'),
  projects: projects.get('list'),
  initialValues: getActiveProject(projects) && getActiveProject(projects).toJS()
});

const mapDispatchToProps = dispatch => ({
  onSetActiveProject: (id) => dispatch(setActiveProject(id)),
  onSaveProject: (project) => dispatch(editProject(project)),
  onFetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'editProject',
    validate: validateProject
  })(EditProject)
);