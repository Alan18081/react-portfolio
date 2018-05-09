import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {logout} from '../../actions';

import Spinner from '../../components/UI/Spinner';

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return this.props.user ? <Spinner size={14} center/> : <Redirect to="/login"/>
  }
}

const mapStateToProps = ({auth}) => ({
  user: auth.get('user')
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Logout);