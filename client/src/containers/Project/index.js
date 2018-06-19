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
      <button key={item} onClick={() => this.toggleSlideHandler(item)} className={cssClasses.join(' ')}>

      </button>
    );
  };
  render() {
    const {project} = this.props;
    if(!project) {
      return <Spinner size={12} center/>;
    }
    console.log(project.toJS());
    const images = new List()
      .concat(project.get('mainImageUrl'))
      .concat(project.get('images').map(image => image.get('url')));
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
                <div key={image} className={classes.imageItem}>
                  <img src={image} alt="Project"/>
                </div>
              ))}
            </Slider>
            <div className={classes.dots}>
              {images.map((image,i) => this.renderDot(i))}
            </div>
          </div>
          <div className={classes.info}>
            <Title>{project.get('projectName')}</Title>
            <h4 className={classes.type}>{project.get('appType')}</h4>
            <Functions
              list={project.get('functions')}
            />
            {project.get('technologies').size ? <div className={classes.tech}>
              {project.get('technologies').map(tech => (
                <div key={tech.get('_id')} className={classes.techItem}>
                  <i className={[classes.techIcon,`devicon-${tech.get('wordmark')}`].join(' ')}></i>
                </div>
              ))}
            </div> : null}
            <div className={classes.controls}>
              <a href={project.get('link')} rel="noopener noreferrer" target="_blank">
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