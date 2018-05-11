import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import {List} from 'immutable';

import classes from './index.sass';
import {setActiveProject,fetchProjects} from '../../actions';
import {getActiveProject} from '../../selectors';

import Layout from '../../components/Layout/index';
import Button from '../../components/UI/Button/index';
import Title from '../../components/UI/Title/index';
import Functions from '../../components/Functions';
import Spinner from '../../components/UI/Spinner';

class Project extends Component {
  state = {
    activeSlideIndex: 0
  };
  componentDidMount() {
    this.props.onFetchProjects();
    this.props.onSetActiveProject(this.props.match.params.id);
  }
  toggleSlideHandler = i => {
    this.setState({
      activeSlideIndex: i
    });
    this.slider.slickGoTo(i);
  };
  renderDot = item => {
    const cssClasses = [
      classes.dotsItem,
      item === this.state.activeSlideIndex && classes.dotsItemActive
    ];
    return (
      <button onClick={() => this.toggleSlideHandler(item)} className={cssClasses.join(' ')}>

      </button>
    );
  };
  render() {
    const {project} = this.props;
    if(!project) {
      return <Spinner size={12} center/>;
    }
    const images = new List().concat(project.get('mainImage')).concat(project.get('images'));
    return (
      <Layout>
        <div className={classes.container}>
          <div className={classes.imageList}>
            <Slider
              ref={item => this.slider = item}
              slideToShow={1}
              slideToScroll={1}
              infinite={true}
              speed={500}
              adaptiveHeight={true}
            >
              {images.map(image => (
                <div className={classes.imageItem}>
                  <img src={`/uploads/projects/${image}`} alt="Project"/>
                </div>
              ))}
            </Slider>
            <div className={classes.dots}>
              {images.map((image,i) => this.renderDot(i))}
            </div>
          </div>
          <div className={classes.info}>
            <Title>Photobook</Title>
            <h4 className={classes.type}>Web-application</h4>
            <Functions
              list={project.get('functions')}
            />
            <div className={classes.tech}>
              {project.get('technologies').map(tech => (
                <div className={classes.techItem}>
                  <i className={[classes.techIcon,`devicon-${tech.get('wordmark')}`].join(' ')}></i>
                </div>
              ))}
            </div>
            <div className={classes.controls}>
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <Button>Show app</Button>
              </a>
              <Link to="/projects">
                <Button plain offset>Back to projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({projects}) => ({
  project: getActiveProject(projects)
});

const mapDispatchToProps = dispatch => ({
  onFetchProjects: () => dispatch(fetchProjects()),
  onSetActiveProject: (id) => dispatch(setActiveProject(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Project);