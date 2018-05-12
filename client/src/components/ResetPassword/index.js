import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {validateLogin} from '../../utils/validate';
import {resetPassword} from '../../actions';

import Layout from '../Layout';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Title from '../UI/Title';
import Panel from '../UI/Panel';
import Notification from '../UI/Notification';
import Spinner from '../UI/Spinner';

import KeyIcon from '../../assets/icons/key.svg';

const ResetPassword = ({handleSubmit,onResetPassword,loading,success,error}) => (
  <Layout>
    <div className={classes.container}>
      <Title Icon={KeyIcon}>Reset password</Title>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onResetPassword)}
      >
        <Panel>
          <Field name="email" component={Input} placeholder="Email"/>
          {success
          && <Notification>
            Reset email has been successfully sent to email {success}
          </Notification>
          }
          {error
          && <Notification error>
            {error}
          </Notification>
          }
          <div className={classes.controls}>
            <Button full>Send reset email</Button>
            <Link to="/login" className={classes.link}>
              <Button plain>Sign In</Button>
            </Link>
          </div>
        </Panel>
        {loading && <div className={classes.loader}>
          <Spinner left size={8}/>
        </div>}
      </form>
    </div>
  </Layout>
);

const mapStateToProps = ({auth}) => ({
  loading: auth.get('loading'),
  success: auth.get('resetPasswordSuccess'),
  error: auth.get('resetPasswordError')
});

const mapDispatchToProps = dispatch => ({
  onResetPassword: (email) => dispatch(resetPassword(email))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'resetPassword',
    validate: validateLogin
  })(ResetPassword)
);