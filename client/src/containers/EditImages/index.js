import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

import classes from './index.sass';
import {addImage,removeImage} from '../../actions';
import {getActiveProject} from '../../selectors';

import SectionHeader from '../../components/SectionHeader';
import Spinner from '../../components/UI/Spinner';

import DeleteIcon from '../../assets/icons/delete-button.svg';

class EditImages extends Component {
  loadImages = async (event) => {
    const files = event.target.files;
    for(let file of files) {
      this.props.onAddImage(this.props.projectId,file);
    }
  };
  triggerFileInput = (e) => {
    this.input.click();
  };
  render() {
    const {images,loading,projectId,onRemoveImage} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <SectionHeader
            clicked={this.triggerFileInput}
          >Images</SectionHeader>
          {loading && <Spinner size={3}/>}
        </div>
        <TransitionGroup className={classes.list}>
          {images.map(img => (
            <CSSTransition
              key={img.get('_id')}
              timeout={300}
              classNames={{
                enter: classes.imageEnter,
                enterActive: classes.imageEnterActive,
                exit: classes.imageExit,
                exitActive: classes.imageExitActive
              }}
            >
              <div
                className={classes.image}
                onClick={() => onRemoveImage(projectId,img.get('publicId'))}
              >
                <div className={classes.overlay}>
                  <DeleteIcon className={classes.icon}/>
                </div>
                <img src={img.get('url')} alt="Project"/>
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

const mapStateToProps = ({projects}) => ({
  loading: projects.get('imageLoading'),
  images: getActiveProject(projects).get('images')
});

const mapDispatchToProps = dispatch => ({
  onAddImage: (id,image) => dispatch(addImage(id,image)),
  onRemoveImage: (id,name) => dispatch(removeImage(id,name))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditImages);