import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import classes from './index.sass';
import {fetchContacts} from '../../actions';

import Layout from '../Layout';
import Title from '../UI/Title';
import Panel from '../UI/Panel';
import Spinner from '../UI/Spinner';

import PlaneIcon from '../../assets/icons/paper-plane.svg';
import SkypeIcon from '../../assets/icons/skype-logo.svg';
import LinkedInIcon from '../../assets/icons/linkedin-logo.svg';
import VkIcon from '../../assets/icons/vk-social-network-logo.svg';
import EmailIcon from '../../assets/icons/close-envelope.svg';
import GithubIcon from '../../assets/icons/github-logo.svg';
import FbIcon from '../../assets/icons/facebook-logo.svg';

const SocialItem = ({link,Icon,text,mail}) => {
  let content = (
    <div className={classes.socialItem}>
      <Icon className={classes.icon}/>
      {text}
    </div>
  );
  if(link) {
    content = (
      <a href={`https://${link}`} className={[classes.socialItem,classes.socialLink].join(' ')}>
        <Icon className={classes.icon}/>
        {text}
      </a>
    );
  }
  if(mail) {
    content = (
      <Link to="/message" className={[classes.socialItem,classes.socialLink].join(' ')}>
        <Icon className={classes.icon}/>
        {text}
      </Link>
    );
  }
  return (
    <div className={classes.socialContainer}>
      {content}
    </div>
  );
};

class Contacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const {contacts} = this.props;
    if(!contacts) {
      return <Spinner size={12} center/>;
    }
    return (
      <Layout>
        <Title Icon={PlaneIcon}>Contacts</Title>
        <div className={classes.container}>
          <Panel>
            <div className={classes.social}>
              <SocialItem
                Icon={SkypeIcon}
                text={contacts.get('skype') || 'No skype'}
              />
              <SocialItem
                Icon={EmailIcon}
                mail
                text={contacts.get('email') || 'No email'}
              />
              <SocialItem
                link
                Icon={LinkedInIcon}
                text={contacts.get('linkedIn') || 'No linkedIn account'}
              />
              <SocialItem
                link
                Icon={GithubIcon}
                text={contacts.get('github') || 'No github account'}
              />
              <SocialItem
                link
                Icon={VkIcon}
                text={contacts.get('vk') || 'No vkontakte account'}
              />
              <SocialItem
                link
                Icon={FbIcon}
                text={contacts.get('facebook') || 'No facebook account'}
              />
            </div>
          </Panel>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({contacts}) => ({
  contacts: contacts.get('list')
});

const mapDispatchToProps = dispatch => ({
  onFetchContacts: () => dispatch(fetchContacts())
});

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);