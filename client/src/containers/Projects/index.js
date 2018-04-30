import React, {Component} from 'react';
import Slider from 'react-slick';
import ScrollArea from 'react-scrollbar';
import Radium from 'radium';

import classes from './index.sass';

import Layout from '../../components/Layout/index';
import ProjectSlide from '../../components/ProjectSlide/index';
import ProjectPreview from '../../components/ProjectPreview/index';

import ArrowIcon from '../../assets/icons/play-button.svg';

const Arrow = ({reverse,onClick}) => (
  <button onClick={onClick} className={[classes.arrow,reverse && classes.arrowReversed].join(' ')}>
    <ArrowIcon className={classes.arrowIcon}/>
  </button>
);

class Projects extends Component {
  render() {
    return (
      <Layout>
        <div className={classes.slider}>
          <div className={classes.activeSlide}>
            <Slider
              ref={item => this.slider = item}
              slideToShow={1}
              slideToScroll={1}
              infinite={true}
              initialSlide={0}
              speed={500}
              arrow={true}
              prevArrow={<Arrow reverse />}
              nextArrow={<Arrow/>}
            >
              <ProjectSlide
                name="Photobook"
                image="photobook.jpg"
                technologies={[
                  "html5-plain-wordmark",
                  "css3-plain-wordmark"
                ]}
              />
              <ProjectSlide
                name="Portfolio"
                image="photobook.jpg"
                technologies={[
                  "html5-plain-wordmark",
                  "css3-plain-wordmark"
                ]}
              />
            </Slider>
          </div>
          <ScrollArea
            className={classes.slides}
            horizontal={window.innerWidth < 992}
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
              <ProjectPreview
                showSlide={() => this.slider.slickGoTo(0)}
                image="photobook.jpg"
                name="photobook"
              />
              <ProjectPreview
                showSlide={() => this.slider.slickGoTo(1)}
                image="photobook.jpg"
                name="photobook"
              />
              <ProjectPreview
                showSlide={() => this.slider.slickGoTo(0)}
                image="photobook.jpg"
                name="photobook"
              />
              <ProjectPreview
                showSlide={() => this.slider.slickGoTo(1)}
                image="photobook.jpg"
                name="photobook"
              />
              <ProjectPreview
                showSlide={() => this.slider.slickGoTo(0)}
                image="photobook.jpg"
                name="photobook"
              />
              <ProjectPreview
                showSlide={() => this.slider.slickGoTo(1)}
                image="photobook.jpg"
                name="photobook"
              />
            </ul>
          </ScrollArea>
        </div>
      </Layout>
    )
  }
}

export default Radium(Projects);