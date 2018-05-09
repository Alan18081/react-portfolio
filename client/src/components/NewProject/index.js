import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {validateProject} from '../../utils/validate';
import {createProject} from '../../actions';

import AddFileIcon from '../../assets/icons/add_file.svg';

import Admin from '../../containers/Admin';
import Title from '../UI/Title';
import Panel from '../UI/Panel';
import Input from '../UI/Input';
import AddFunctions from '../../containers/AddFunctions';
import Button from '../UI/Button';
import SelectTechnologies from '../../containers/SelectTechnologies';
import LoadImages from '../../containers/LoadImages';
import LoadMainImage from '../../containers/LoadMainImage';

const newProject = (props) => {
  const {
    handleSubmit,
    change,
    reset,
    array,
    onSubmitProject,
    edit,
    initialValues,
    loading
  } = props;
  const addFunction = (func) => {
    array.push('functions',func);
  };
  const addMainImage = (file) => {
    change('mainImage',file);
  };
  const removeFunction = (i) => {
    array.splice('functions',i);
  };
  const selectTechnology = (tech) => {
    array.push('technologies',tech);
  };
  const removeTechnology = (index) => {
    array.remove('technologies',index);
  };
  const loadImages = (image) => {
    array.push('images',image);
  };
  const submitHandler = (values) => {
    onSubmitProject(values,edit ? initialValues.id : null);
  };
  return (
    <Admin>
      <Title Icon={AddFileIcon}>
        New project
      </Title>
      <Panel>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Field name="projectName" component={Input} placeholder="Name of project"/>
          <Field name="appType" component={Input} placeholder="Type of project"/>
          <Field name="link" component={Input} placeholder="Link"/>
          <AddFunctions
            add={addFunction}
            remove={removeFunction}
          />
          <LoadMainImage
            add={addMainImage}
          />
          <SelectTechnologies
            select={selectTechnology}
            remove={removeTechnology}
          />
          <LoadImages
            load={loadImages}
          />
          <div className={classes.controls}>
            <Button disabled={loading}>Create project</Button>
            <Link to="/admin/projects">
              <Button plain offset>Cancel</Button>
            </Link>
          </div>
        </form>
      </Panel>
    </Admin>
  );
};

const mapStateToProps = ({projects}) => ({
  loading: projects.get('loading')
});

const mapDispatchToProps = dispatch => ({
  onSubmitProject: (project) => dispatch(createProject(project))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'newProject',
    validate: validateProject
  })(newProject)
);
