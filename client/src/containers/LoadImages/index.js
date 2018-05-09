import React, {Component} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

import classes from './index.sass';
import loadImage from '../../utils/loadImage';

import SectionHeader from '../../components/SectionHeader';

import DeleteIcon from '../../assets/icons/delete-button.svg';

class LoadImages extends Component {
  state = {
    images: []
  };
  loadImages = async (event) => {
    const files = event.target.files;
    const images = [];
    for(let file of files) {
      const src = await loadImage(file);
      images.push(src);
      this.props.load(file);
    }
    this.setState({
      images
    });
  };
  removeImage = (img) => {
    const index = this.state.images.findIndex(item => img === item);
    const images = this.state.images;
    images.splice(index,1);
    this.setState({
      images
    });
  };
  triggerFileInput = (e) => {
    this.input.click();
  };
  render() {
    return (
      <div className={classes.container}>
        <SectionHeader
          clicked={this.triggerFileInput}
        >Images</SectionHeader>
        <TransitionGroup className={classes.list}>
          {this.state.images.map(img => (
            <CSSTransition
              timeout={300}
              classNames={{
                enter: classes.imageEnter,
                enterActive: classes.imageEnterActive,
                exit: classes.imageExit,
                exitActive: classes.imageExitActive
              }}
            >
              <div className={classes.image} onClick={() => this.removeImage(img)}>
                <div className={classes.overlay}>
                  <DeleteIcon className={classes.icon}/>
                </div>
                <img src={img} alt="Project"/>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <input
          className={classes.input}
          ref={input => this.input = input}
          type="file"
          multiple
          onChange={this.loadImages}/>
      </div>
    );
  }
}

export default LoadImages;