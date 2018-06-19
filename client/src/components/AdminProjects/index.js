import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

import classes from './index.sass';
import {fetchProjects,removeProject,resetDone} from '../../actions';

import Admin from '../../containers/Admin';
import AdminProject from '../AdminProject';
import AdminNav from '../AdminNav';
import Button from '../UI/Button';
import Asx from '../../hoc/Asx';
import Title from '../UI/Title';
import Spinner from '../UI/Spinner';
import RemoveProject from '../RemoveProject';
import Modal from '../UI/Modal';

class AdminProjects extends Component {
  state = {
    activeSlideIndex: 0,
    removingProject: {},
    isRemovingProject: false
  };
  componentDidMount() {
    this.props.onFetchProjects();
  }
  setSlide = (index) => {
    this.slider.slickGoTo(index);
    this.setState({
      activeSlideIndex: index
    })
  };
  onChangeSlide = (current,next) => {
    this.setState({activeSlideIndex: next})
  };
  showRemovingModal = (name,id) => {
    this.setState({
      ...this.state,
      removingProject: {
        name,
        id
      },
      isRemovingProject: true
    });
  };
  closeRemovingModal = () => {
    this.setState({
      ...this.state,
      isRemovingProject: false,
      removingProject: {}
    });
    this.props.onResetDone();
  };
  removeProject = () => {
    this.props.onRemoveProject(this.state.removingProject.id);
  };
  render() {
    const {projects} = this.props;
    let content = <Spinner center size={12}/>;
    if(projects) {
      content = <div className={classes.container}>
        {this.state.isRemovingProject
        && <Modal close={this.closeRemovingModal}>
          <RemoveProject
            name={this.state.removingProject.name}
            remove={this.removeProject}
            close={this.closeRemovingModal}
            removed={this.props.removed}
          />
        </Modal>}
        {projects.size > 0
          ? <Asx>
              <aside className={classes.sidebar}>
                <Link to="/admin/newProject" className={classes.create}>
                  <Button full>Add new project</Button>
                </Link>
                <div className={classes.list}>
                  {projects.map((project,i) => (
                    <div
                      key={project.get('_id')}
                      className={[classes.link,this.state.activeSlideIndex === i ? classes.linkActive : ''].join(' ')}
                      onClick={() => this.setSlide(i)}
                    >
                      {project.get('projectName')}
                    </div>
                  ))}
                </div>
              </aside>
              <div className={classes.active}>
                <Slider
                  ref={item => this.slider = item}
                  slideToShow={1}
                  slideToScroll={1}
                  infinite={true}
                  initialSlide={0}
                  speed={500}
                  className={classes.slider}
                  adaptiveHeight
                  beforeChange={this.onChangeSlide}
                >
                  {projects.map(project => (
                    <div className={classes.slide} key={Math.random()}>
                      <AdminProject
                        project={project}
                        remove={this.showRemovingModal}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
          </Asx>
          : <div className={classes.empty}>
            <Title>You don't have added projects</Title>
            <Link to="/admin/newProject">
              <Button>Add project</Button>
            </Link>
          </div>
        }
      </div>;
    }
    return (
      <Admin>
        <AdminNav/>
        {content}
      </Admin>
    );
  }
}


const mapStateToProps = ({projects}) => ({
  projects: projects.get('list'),
  loading: projects.get('loading'),
  removed: projects.get('removed')
});

const mapDispatchToProps = dispatch => ({
  onFetchProjects: () => dispatch(fetchProjects()),
  onRemoveProject: (id) => dispatch(removeProject(id)),
  onResetDone: () => dispatch(resetDone())
});



export default connect(mapStateToProps,mapDispatchToProps)(AdminProjects);