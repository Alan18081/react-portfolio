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
    console.log(this.props.image);
    return (
      <div className={classes.container}>
        <SectionHeader
          clicked={this.triggerFileInput}
        >Main image</SectionHeader>
        {this.state.image && <div className={classes.image} onClick={this.removeImage}>
          <img src={this.state.image || `/uploads/${this.props.image}`} alt="Project"/>
        </div>}
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