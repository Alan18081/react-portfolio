import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';

import {validateProfile} from '../../utils/validate';
import loadImage from '../../utils/loadImage';
import {editProfile,fetchProfile} from '../../actions';

import Admin from '../Admin';
import AdminNav from '../../components/AdminNav';
import Panel from '../../components/UI/Panel';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import ImageField from '../../components/ImageField';
import Controls from '../../components/UI/Controls';
import Spinner from '../../components/UI/Spinner';

class AdminProfile extends Component {
  state = {
    avatarSrc: '',
    photoSrc: ''
  };
  componentDidMount() {
    this.props.onFetchProfile();
  }
  resetHandler = e => {
    e.preventDefault();
    this.props.reset();
    this.setState({
      avatarSrc: '',
      photoSrc: ''
    });
  };
  changeAvatarHandler = async event => {
    const file = event.target.files[0];
    const src = await loadImage(file);
    this.setState({
      ...this.state,
      avatarSrc: src
    });
    this.props.change('avatar',file);
  };
  changePhotoHandler = async event => {
    const file = event.target.files[0];
    const src = await loadImage(file);
    this.setState({
      ...this.state,
      photoSrc: src
    });
    this.props.change('photo',file);
  };
  render() {
    const {handleSubmit,initialValues,loading} = this.props;
    let content = <Spinner size={12} center/>;
    if(initialValues) {
      content = <Panel>
        <form onSubmit={handleSubmit(this.props.onEditProfile)}>
          <Field name="name" component={Input} placeholder="Your name"/>
          <Field name="profession" component={Input} placeholder="Your profession"/>
          <Field name="story" component={Input} placeholder="Your story" type="textarea"/>
          <ImageField
            folder="profile"
            src={this.state.avatarSrc}
            changeImage={this.changeAvatarHandler}
            defaultSrc={initialValues.avatar}
          >
            Load avatar
          </ImageField>
          <ImageField
            folder="profile"
            src={this.state.photoSrc}
            changeImage={this.changePhotoHandler}
            defaultSrc={initialValues.photo}
          >
            Load main photo
          </ImageField>
          <Controls loading={loading}>
            <Button>Save profile</Button>
            <Button plain offset clicked={this.resetHandler}>Set old values</Button>
          </Controls>
        </form>
      </Panel>;
    }
    return (
      <Admin>
        <AdminNav/>
        {content}
      </Admin>
    );
  }
};

const mapStateToProps = ({profile}) => ({
  loading: profile.get('loading'),
  initialValues: profile.get('data').toJS()
});

const mapDispatchToProps = dispatch => ({
  onFetchProfile: () => dispatch(fetchProfile()),
  onEditProfile: (userInfo) => dispatch(editProfile(userInfo))
});

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({
    form: 'saveProfile',
    enableReinitialize: true,
    validate: validateProfile
  })(AdminProfile)
);