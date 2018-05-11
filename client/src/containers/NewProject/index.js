import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {reduxForm,Field} from 'redux-form';

import {validateProject} from '../../utils/validate';
import {createProject,resetDone} from '../../actions/index';

import AddFileIcon from '../../assets/icons/add_file.svg';

import Admin from '../Admin/index';
import Title from '../../components/UI/Title/index';
import Panel from '../../components/UI/Panel/index';
import Input from '../../components/UI/Input/index';
import AddFunctions from '../AddFunctions/index';
import Button from '../../components/UI/Button/index';
import SelectTechnologies from '../SelectTechnologies/index';
import LoadImages from '../LoadImages/index';
import LoadMainImage from '../LoadMainImage/index';
import Controls from '../../components/UI/Controls/index';

class NewProject extends Component {
  componentDidMount() {
    this.props.onResetDone();
  }
  addFunction = (func) => {
    this.props.array.push('functions',func);
  };
  addMainImage = (file) => {
    this.props.change('mainImage',file);
  };
  removeMainImage = () => {
    this.props.change('mainImage',null);
  };
  removeFunction = (i) => {
    this.props.array.splice('functions',i);
  };
  selectTechnology = (tech) => {
    this.props.array.push('technologies',tech);
  };
  removeTechnology = (index) => {
    this.props.array.remove('technologies',index);
  };
  loadImages = (image) => {
    this.props.array.push('images',image);
  };
  render() {
    const {
      handleSubmit,
      onCreateProject,
      loading
    } = this.props;
    return (
      <Admin>
        {<Redirect to="/admin/projects"/>}
        <Title Icon={AddFileIcon}>
          New project
        </Title>
        <Panel>
          <form onSubmit={handleSubmit(onCreateProject)}>
            <Field name="projectName" component={Input} placeholder="Name of project"/>
            <Field name="appType" component={Input} placeholder="Type of project"/>
            <Field name="link" component={Input} placeholder="Link"/>
            <AddFunctions
              add={this.addFunction}
              remove={this.removeFunction}
            />
            <LoadMainImage
              add={this.addMainImage}
              remove={this.removeMainImage}
            />
            <SelectTechnologies
              select={this.selectTechnology}
              remove={this.removeTechnology}
            />
            <LoadImages
              load={this.loadImages}
            />
            <Controls loading={loading}>
              <Button disabled={loading}>Create project</Button>
              <Link to="/admin/projects">
                <Button plain offset>Cancel</Button>
              </Link>
            </Controls>
          </form>
        </Panel>
      </Admin>
    );
  }
};

const mapStateToProps = ({projects}) => ({
  loading: projects.get('loading'),
  done: projects.get('done')
});

const mapDispatchToProps = dispatch => ({
  onResetDone: () => dispatch(resetDone()),
  onCreateProject: (project) => dispatch(createProject(project))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'newProject',
    validate: validateProject
  })(NewProject)
);
