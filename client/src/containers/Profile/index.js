import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchSkills,fetchContacts} from '../../actions';

import Layout from '../../components/Layout';
import UserInfo from '../../components/UserInfo';
import Skills from '../../components/Skills';
import Spinner from '../../components/UI/Spinner';

class Profile extends Component {
  componentDidMount() {
    this.props.onFetchSkills();
    this.props.onFetchContacts();
  }
  downloadResumeHandler = () => {

  };
  render() {
    const {profile,skills} = this.props;
    if(!profile || !skills) {
      return <Spinner size={12} center/>;
    }
    return (
      <Layout>
        <UserInfo
          downloadResume={this.downloadResumeHandler}
          image={profile.get('photoUrl')}
          name={profile.get('name')}
          profession={profile.get('profession')}
          story={profile.get('story')}
        />
        <Skills
          skills={skills}
        />
      </Layout>
    );
  }
}

const mapStateToProps = ({profile,skills}) => ({
  profile: profile.get('data'),
  skills: skills.get('list')
});

const mapDispatchToProps = dispatch => ({
  onFetchSkills: () => dispatch(fetchSkills()),
  onFetchContacts: () => dispatch(fetchContacts())
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);