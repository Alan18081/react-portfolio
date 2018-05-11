import React, {Component} from 'react';

import classes from './index.sass';
import loadImage from '../../utils/loadImage';

import SectionHeader from '../../components/SectionHeader';

class LoadMainImage extends Component {
  state = {
    image: false
  };
  loadImage = async (event) => {
    const file = event.target.files[0];
    const src = await loadImage(file);
    this.setState({
      image: src
    });
    this.props.add(file);
  };
  removeImage = () => {
    this.setState({
      image: false
    });
    this.props.remove();
  };
  triggerFileInput = () => {
    this.input.click();
  };
  render() {
    const {image} = this.props;
    return (
      <div className={classes.container}>
        <SectionHeader
          clicked={this.triggerFileInput}
        >Main image</SectionHeader>
        {this.props.image || this.state.image
          ?
            <div className={classes.image} onClick={this.removeImage}>
              <img src={this.state.image || image} alt="Project"/>
            </div>
          : null
        }
        <input
          className={classes.input}
          ref={input => this.input = input}
          type="file"
          onChange={this.loadImage}/>
      </div>
    );
  }
}

export default LoadMainImage;