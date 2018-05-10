import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchAdmin,fetchTechs} from '../../actions';

import Layout from '../../components/Layout';
import Spinner from '../../components/UI/Spinner';

class Admin extends Component {
  componentDidMount() {
    this.props.onFetchAdmin();
    this.props.onFetchTechs();
  }
  render() {
    const {admin,children,techs} = this.props;
    if(admin === null) {
      return <Spinner size={12} center/>
    }
    else if(admin === false) {
      return <Redirect to="/login"/>
    }
    else if(admin) {
      return techs
        ? <Layout admin>
          {children}
        </Layout>
        : <Spinner size={12} center/>
    }
  }
}

const mapStateToProps = ({auth,tech,projects}) => ({
  techs: tech.get('list'),
  admin: auth.get('admin')
});

const mapDispatchToProps = dispatch => ({
  onFetchAdmin: () => dispatch(fetchAdmin()),
  onFetchTechs: () => dispatch(fetchTechs())
});

export default connect(mapStateToProps,mapDispatchToProps)(Admin);