import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';

import classes from './index.sass';
import {fetchContacts,editContacts} from '../../actions';

import Layout from '../Layout';
import AdminNav from '../AdminNav';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Controls from '../UI/Controls';
import Spinner from '../UI/Spinner';
import Panel from '../UI/Panel';

import SkypeIcon from '../../assets/icons/skype-logo.svg';
import LinkedInIcon from '../../assets/icons/linkedin-logo.svg';
import VkIcon from '../../assets/icons/vk-social-network-logo.svg';
import EmailIcon from '../../assets/icons/close-envelope.svg';
import GithubIcon from '../../assets/icons/github-logo.svg';
import FbIcon from '../../assets/icons/facebook-logo.svg';

const ContactItem = ({meta,input,Icon,title}) => (
  <div className={classes.contactsContainer}>
    <div className={classes.contactsItem}>
      <Icon className={classes.icon}/>
      <div className={classes.field}>
        <Input input={input} meta={meta} placeholder={title}/>
      </div>
    </div>
  </div>
);

class AdminContacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  resetForm = event => {
    event.preventDefault();
    this.props.reset();
  };
  render() {
    const {handleSubmit,initialValues,loading} = this.props;
    let content = <Spinner center size={12}/>;
    if(initialValues) {
      content = <Panel>
        <form onSubmit={handleSubmit(this.props.onEditContacts)}>
          <div  className={classes.container}>
            <Field
              Icon={SkypeIcon}
              name="skype"
              title="Skype nickname"
              component={ContactItem}
            />
            <Field
              Icon={EmailIcon}
              name="email"
              title="Email"
              component={ContactItem}
            />
            <Field
              Icon={LinkedInIcon}
              name="linkedIn"
              title="LinkedIn link"
              component={ContactItem}
            />
            <Field
              Icon={GithubIcon}
              name="github"
              title="Github link"
              component={ContactItem}
            />
            <Field
              Icon={VkIcon}
              name="vk"
              title="Vkonakte link"
              component={ContactItem}
            />
            <Field
              Icon={FbIcon}
              name="facebook"
              title="Facebook link"
              component={ContactItem}
            />
          </div>
          <Controls loading={loading}>
            <Button>Save contacts</Button>
            <Button plain offset clicked={this.resetForm}>Set old values</Button>
          </Controls>
        </form>
      </Panel>;
    }
    return (
      <Layout admin>
        <AdminNav/>
        {content}
      </Layout>
    )
  }
};

const mapStateToProps = ({contacts}) => ({
  initialValues: contacts.get('list') && contacts.get('list').toJS(),
  loading: contacts.get('loading')
});

const mapDispatchToProps = dispatch => ({
  onFetchContacts: () => dispatch(fetchContacts()),
  onEditContacts: (contacts) => dispatch(editContacts(contacts))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'contacts',
    enableReinitialize: true
  })(AdminContacts)
);