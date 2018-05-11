import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {reduxForm,Field} from 'redux-form';

import {validateProject} from '../../utils/validate';
import {editProject,setActiveProject,fetchProjects,resetDone} from '../../actions/index';
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
import Controls from '../../components/UI/Controls';

class EditProject extends Component {
  componentDidMount() {
    this.props.onResetDone();
    this.props.onFetchProjects();
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
  setTechnologies = (techs) => {
    this.props.change('technologies',techs);
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
          {this.props.done && <Redirect to="/admin/projects"/>}
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
                image={initialValues.mainImageUrl}
                add={this.addMainImage}
              />
              <SelectTechnologies
                edit
                set={this.setTechnologies}
                selected={initialValues.technologies.map(tech => tech._id)}
                select={this.selectTechnology}
                remove={this.removeTechnology}
              />
              <EditImages
                projectId={initialValues._id}
              />
              <Controls loading={loading}>
                <Button disabled={loading}>Save project</Button>
                <Link to="/admin/projects">
                  <Button plain offset>Cancel</Button>
                </Link>
              </Controls>
            </form>
          </Panel>
        </Admin>
      )
    }
    return content;
  }
};

const mapStateToProps = ({projects}) => ({
  done: projects.get('done'),
  loading: projects.get('loading'),
  projects: projects.get('list'),
  initialValues: getActiveProject(projects) && getActiveProject(projects).toJS()
});

const mapDispatchToProps = dispatch => ({
  onResetDone: () => dispatch(resetDone()),
  onSetActiveProject: (id) => dispatch(setActiveProject(id)),
  onSaveProject: (project) => dispatch(editProject(project)),
  onFetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'editProject',
    enableReinitialize: true,
    validate: validateProject
  })(EditProject)
);
