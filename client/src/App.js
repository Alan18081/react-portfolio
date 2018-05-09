import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route,Switch,withRouter} from 'react-router-dom';

import './App.sass';
import {fetchProfile,fetchSkills} from './actions';

import Main from './components/Main';
import Profile from './containers/Profile';
import Projects from './containers/Projects';
import SendEmail from './components/SendEmail';
import Contacts from './components/Contacts';
import Project from './containers/Project';
import Login from './components/Login';
import Logout from './containers/Logout';
import ResetPassword from './components/ResetPassword';
import AdminProfile from './containers/AdminProfile';
import AdminSkills from './containers/AdminSkills';
import AdminProjects from './components/AdminProjects';
import AdminContacts from './components/AdminContacts';
import NewProject from './components/NewProject';
import AdminDashboard from './containers/AdminDashboard';
import Spinner from './components/UI/Spinner';
import EditProject from './containers/EditProject';
import PageNotFound from './components/PageNotFound';
import ServerError from './components/ServerError';


class App extends Component {
  componentDidMount() {
    this.props.onFetchProfile();
    this.props.onFetchSkills();
  }
  render() {
    const {profile,error} = this.props;
    let content = <Spinner size={12} center/>;
    if(error) {
      return <ServerError error={error}/>
    }
    if(profile.size > 0) {
      content = (
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/message" component={SendEmail}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/projects/:id" component={Project}/>
          <Route path="/login" component={Login}/>
          <Route path="/resetPassword" component={ResetPassword}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/admin/profile" component={AdminProfile}/>
          <Route path="/admin/skills" component={AdminSkills}/>
          <Route path="/admin/projects" component={AdminProjects}/>
          <Route path="/admin/contacts" component={AdminContacts}/>
          <Route path="/admin/newProject" component={NewProject}/>
          <Route path="/admin/editProject/:id" component={EditProject}/>
          <Route path="/admin/dashboard" component={AdminDashboard}/>
          <Route path="/*" component={PageNotFound}/>
        </Switch>
      )
    }
    return content;
  }
}

const mapStateToProps = ({serverError,profile,auth,skills}) => ({
  error: serverError,
  profile,
  skills: skills.get('skills'),
  admin: auth.get('admin')
});

const mapDispatchToProps = dispatch => ({
  onFetchProfile: () => dispatch(fetchProfile()),
  onFetchSkills: () => dispatch(fetchSkills())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));