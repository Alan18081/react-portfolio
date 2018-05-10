import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './index.sass';

import Subtitle from '../../components/UI/Subtitle';

class SelectTechnologies extends Component {
  state = {
    selected: []
  };
  componentDidMount() {
    if(this.props.edit) {
      this.setState({
        selected: this.props.selected
      });
      if(this.props.selected.length) {
        this.props.set(this.props.selected);
      }
    }
  }
  toggleTechHandler = (item) => {
    const selectedItems = this.state.selected;
    const selected = selectedItems.find(index => item === index);
    if(selected) {
      const index = selectedItems.findIndex(tech => tech === item);
      selectedItems.splice(index,1);
      this.props.remove(index);
    }
    else {
      selectedItems.push(item);
      this.props.select(item);
    }
    this.setState({
      selected: selectedItems
    });
  };
  render() {
    return (
      <div className={classes.container}>
        <Subtitle offset>Technologies</Subtitle>
        <div className={classes.list}>
          {this.props.techs.map((tech) => {
            const selected = this.state.selected.find(item => tech.get('_id') === item);
            return (
              <div
                key={tech}
                onClick={() => this.toggleTechHandler(tech.get('_id'))}
                className={[classes.item,selected !== undefined ? classes.itemActive : ''].join(' ')}
              >
                {tech.get('name')}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tech}) => ({
  techs: tech.get('list')
});

export default connect(mapStateToProps)(SelectTechnologies);