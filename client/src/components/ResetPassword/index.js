import React from 'react';
import {Link} from 'react-router-dom';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {validateLogin} from '../../utils/validate';

import Layout from '../Layout';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Title from '../UI/Title';
import Panel from '../UI/Panel';

import KeyIcon from '../../assets/icons/key.svg';

const Login = ({handleSubmit}) => (
  <Layout>
    <div className={classes.container}>
      <Title Icon={KeyIcon}>Reset password</Title>
      <form className={classes.form} onSubmit={handleSubmit(() => {})}>
        <Panel>
          <Field name="email" component={Input} placeholder="Email"/>
          <div className={classes.controls}>
            <Button full>Send reset email</Button>
            <Link to="/login" className={classes.link}>
              <Button plain>Sign In</Button>
            </Link>
          </div>
        </Panel>
      </form>
    </div>
  </Layout>
);

export default reduxForm({
  form: 'resetPassword',
  validate: validateLogin
})(Login);