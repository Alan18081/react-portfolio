import React, {Component} from 'react';

import Layout from '../../components/Layout';
import UserInfo from '../../components/UserInfo';
import Skills from '../../components/Skills';

class Profile extends Component {
  downloadResumeHandler = () => {

  };
  render() {
    return (
      <Layout>
        <UserInfo
          downloadResume={this.downloadResumeHandler}
          image="photo.jpg"
          name="Alex Ostapiuk"
          profession="Front-end developer"
          story="Ipsum per taciti ut arcu mus curabitur sociosqu, dui quam Fringilla cubilia porta mus sociosqu. Ultrices, placerat. Lacinia dui montes suscipit. Porttitor hymenaeos in adipiscing sociosqu tempus. Dictum aliquam fames eget ultrices nullam fringilla ullamcorper mus ridiculus leo. Aliquam habitasse viverra ridiculus.
                   Cum lacus pharetra nonummy, facilisi id Etiam eget phasellus vivamus, praesent torquent litora aliquet elit dictumst. Orci cubilia erat torquent lacus cubilia netus.
                   Posuere c onsequat tristique magnis cras. Feugiat donec vestibulum faucibus erat torquent nullam elementum praesent eu. Taciti hac eros auctor fusce turpis neque eu arcu sem dapibus. Semper volutpat id. Turpis consequat dui etiam nam, cum"
        />
        <Skills/>
      </Layout>
    );
  }
}

export default Profile;