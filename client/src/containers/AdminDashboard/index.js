import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './index.sass';
import {fetchEmails,fetchProjects,removeEmail} from '../../actions/index';

import Admin from '../Admin/index';
import Stats from '../../components/Stats/index';
import EmailList from '../../components/EmailList/index';
import AdminTechnologies from '../AdminTechonologies/index';
import Spinner from '../../components/UI/Spinner';
import AdminNav from '../../components/AdminNav';

class AdminDashboard extends Component {
  componentDidMount() {
    this.props.onFetchEmails();
    this.props.onFetchProjects();
  }
  render() {
    const {techs,emails,projects,onRemoveEmail} = this.props;
    let content = <Spinner size={12} center/>;
    if(emails && projects) {
      content = (
        <div className={classes.container}>
          <Stats
            emailsSize={emails.size}
            projectsSize={projects.size}
          />
          <EmailList
            list={emails}
            remove={onRemoveEmail}
          />
          <AdminTechnologies
            list={techs}
          />
        </div>
      )
    }
    return (
      <Admin>
        <AdminNav/>
        {content}
      </Admin>
    )
  }
}

const mapStateToProps = ({tech,emails,projects}) => ({
  techs: tech.get('list'),
  emails: emails.get('list'),
  projects: projects.get('list')
});

const mapDispatchToProps = dispatch => ({
  onFetchEmails: () => dispatch(fetchEmails()),
  onFetchProjects: () => dispatch(fetchProjects()),
  onRemoveEmail: (id) => dispatch(removeEmail(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard);