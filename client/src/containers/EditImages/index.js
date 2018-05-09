import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

import classes from './index.sass';
import {addImage,removeImage} from '../../actions';

import SectionHeader from '../../components/SectionHeader';
import Spinner from '../../components/UI/Spinner';

import DeleteIcon from '../../assets/icons/delete-button.svg';

class EditImages extends Component {
  state = {
    images: []
  };
  componentDidMount() {
    this.setState({
      images: this.props.images
    });
  }
  loadImages = async (event) => {
    const files = event.target.files;
    for(let file of files) {
      this.props.onAddImage(this.props.id,file);
      this.setState({
        images: this.state.images.push(file.name)
      });
    }
  };
  removeImage = (img) => {
    this.props.onRemoveImage(this.props.id,img);
    const images = this.state.images.filter(image => image !== img);
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
        <div className={classes.header}>
          <SectionHeader
            clicked={this.triggerFileInput}
          >Images</SectionHeader>
          {this.props.loading && <Spinner size={3}/>}
        </div>
        <TransitionGroup className={classes.list}>
          {this.state.images.map(img => (
            <CSSTransition
              key={img}
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
                <img src={`/uploads/${img}`} alt="Project"/>
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
  loading: projects.get('imageLoading')
});

const mapDispatchToProps = dispatch => ({
  onAddImage: (id,image) => dispatch(addImage(id,image)),
  onRemoveImage: (id,name) => dispatch(removeImage(id,name))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditImages);