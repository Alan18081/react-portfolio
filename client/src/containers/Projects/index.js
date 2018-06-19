import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import ScrollArea from 'react-scrollbar';

import classes from './index.sass';
import {fetchProjects} from '../../actions';

import Layout from '../../components/Layout/index';
import ProjectSlide from '../../components/ProjectSlide/index';
import ProjectPreview from '../../components/ProjectPreview/index';
import Title from '../../components/UI/Title';
import Spinner from '../../components/UI/Spinner';

import ArrowIcon from '../../assets/icons/play-button.svg';

const Arrow = ({reverse,clicked}) => (
  <button onClick={clicked} className={[classes.arrow,reverse && classes.arrowReversed].join(' ')}>
    <ArrowIcon className={classes.arrowIcon}/>
  </button>
);

class Projects extends Component {
  componentDidMount() {
    this.props.onFetchProjects();
  }
  prevSlide = () => {
    this.slider.slickPrev();
  };
  nextSlide = () => {
    this.slider.slickNext();
  };
  render() {
    const {projects} = this.props;
    if(!projects) {
      return <Spinner center size={12}/>
    }
    return (
      <Layout>
        {projects.size > 0
          ? <div className={classes.slider}>
            <div className={classes.activeSlide}>
              <Slider
                ref={item => this.slider = item}
                slideToShow={1}
                slideToScroll={1}
                infinite={true}
                initialSlide={0}
                speed={500}
              >
                {projects.map(project => (
                  <ProjectSlide
                    key={project.get('_id')}
                    id={project.get('_id')}
                    name={project.get('projectName')}
                    image={project.get('mainImageUrl')}
                    technologies={project.get('technologies')}
                  />
                ))}
              </Slider>
            </div>
            <ScrollArea
              className={classes.slides}
              horizontal={false}
              style={{
                borderRadius: '4px'
              }}
              verticalContainerStyle={{
                opacity:'1',
                right: '2px',
                background: 'none',
                top: '5px'
              }}
              verticalScrollbarStyle={{
                borderRadius: '10px',
                backgroundColor: '#a8a8a8',
                opacity: '1'
              }}
            >
              <ul className={classes.list}>
                {projects.map((project,i) => (
                  <ProjectPreview
                    key={project.get('_id')}
                    showSlide={() => this.slider.slickGoTo(i)}
                    image={project.get('mainImageUrl')}
                    name={project.get('projectName')}
                  />
                ))}
              </ul>
            </ScrollArea>
            <div className={classes.arrows}>
              <Arrow reverse clicked={this.prevSlide}/>
              <Arrow clicked={this.nextSlide}/>
            </div>
          </div>
          : <div className={classes.empty}>
            <Title>No projects</Title>
          </div>
        }
      </Layout>
    )
  }
}

const mapStateToProps = ({projects}) => ({
  projects: projects.get('list')
});

const mapDispatchToProps = dispatch => ({
  onFetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps,mapDispatchToProps)(Projects);