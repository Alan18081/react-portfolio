import React, {Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';

import './App.sass';

import Main from './components/Main';
import Profile from './containers/Profile';
import Projects from './containers/Projects';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    )
  }
}

export default withRouter(App);