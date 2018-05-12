import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {validateSetPassword} from '../../utils/validate';
import {setPassword} from '../../actions';

import Layout from '../Layout';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Title from '../UI/Title';
import Panel from '../UI/Panel';
import Notification from '../UI/Notification';

import KeyIcon from '../../assets/icons/key.svg';

const SetPassword = ({handleSubmit,onSetPassword,match,error,success}) => {
  const submitHandler = ({password,confirmPassword}) => {
      onSetPassword(password,confirmPassword,match.params.token);
  };
  return (
    <Layout>
      <div className={classes.container}>
        <Title Icon={KeyIcon}>New password</Title>
        <form
          className={classes.form}
          onSubmit={handleSubmit(submitHandler)}
        >
          <Panel>
            <Field name="password" type="password" component={Input} placeholder="Password"/>
            <Field name="confirmPassword" type="password" component={Input} placeholder="Confirm password"/>
            {success
              && <Notification>
                Password has been successfully changed
              </Notification>
            }
            {error
              && <Notification error>
                {error}
              </Notification>
            }
            <div className={classes.controls}>
              <Button full>Create new password</Button>
              <Link to="/login" className={classes.link}>
                <Button plain>Sign In</Button>
              </Link>
            </div>
          </Panel>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({auth}) => ({
  loading: auth.get('loading'),
  success: auth.get('setPasswordSuccess'),
  error: auth.get('setPasswordError')
});

const mapDispatchToProps = dispatch => ({
  onSetPassword: (password,confirmPassword,token) => dispatch(setPassword(password,confirmPassword,token))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'setPassword',
    validate: validateSetPassword
  })(SetPassword)
);