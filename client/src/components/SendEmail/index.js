import React from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';

import classes from './index.sass';
import {validateEmail} from '../../utils/validate';
import {sendEmail} from '../../actions';

import Layout from '../Layout';
import Title from '../UI/Title';
import Panel from '../UI/Panel';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Notification from '../UI/Notification';
import Spinner from '../UI/Spinner';

import EditIcon from '../../assets/icons/edit.svg';

const SendEmail = ({handleSubmit,reset,onSendEmail,sent,loading}) => {
  const submitHandler = values => {
    const email = {
      ...values,
      date: new Date()
    };
    onSendEmail(email);
  };
  const resetForm = event => {
    event.preventDefault();
    reset();
  };
  return (
    <Layout noMessage>
      <Title Icon={EditIcon}>Write me</Title>
      <form onSubmit={handleSubmit(submitHandler)} className={classes.panel}>
        <Panel>
          <Field name="name" placeholder="Your name" component={Input}/>
          <Field name="email" placeholder="Your email" component={Input}/>
          <Field name="message" type="textarea" placeholder="Your message" component={Input}/>
          {sent && <Notification>Email successfully sent</Notification>}
          <div className={classes.controls}>
            <Button>Send email</Button>
            <Button plain offset clicked={resetForm}>Reset</Button>
            {loading && <Spinner size={6}/>}
          </div>
        </Panel>
      </form>
    </Layout>
  ) ;
};

const mapStateToProps = ({emails}) => ({
  loading: emails.get('loading'),
  sent: emails.get('sent')
});

const mapDispatchToProps = dispatch => ({
  onSendEmail: (email) => dispatch(sendEmail(email))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'message',
    validate: validateEmail
  })(SendEmail)
);