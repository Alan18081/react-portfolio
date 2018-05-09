import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {validateLogin} from '../../utils/validate';
import {login} from '../../actions';

import Layout from '../Layout';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Title from '../UI/Title';
import Panel from '../UI/Panel';
import Spinner from '../UI/Spinner';

import LoginIcon from '../../assets/icons/login.svg';

const Login = ({handleSubmit,onLogin,user,loading}) => (
  <Layout>
    {user && <Redirect to="/admin/profile"/>}
    <div className={classes.container}>
      <Title Icon={LoginIcon}>Sign In</Title>
      <Panel>
        <form className={classes.form} onSubmit={handleSubmit((values) => onLogin(values))}>
          <Field name="email" component={Input} placeholder="Email"/>
          <Field name="password" type="password" component={Input} placeholder="Password"/>
          <Link to="/resetPassword" className={classes.link}>
            <Button plain>Forgot password?</Button>
          </Link>
          <div className={classes.controls}>
            <Button full>Login</Button>
          </div>
        </form>
      </Panel>
      {loading && <div className={classes.loader}>
        <Spinner left size={8}/>
      </div>}
    </div>
  </Layout>
);

const mapStateToProps = ({auth}) => ({
  user: auth.get('user'),
  loading: auth.get('loginLoading')
});

const mapDispatchToProps = dispatch => ({
  onLogin: (info) => dispatch(login(info))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'login',
    validate: validateLogin
  })(Login)
);