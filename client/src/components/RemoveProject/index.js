import React from 'react';

import classes from './index.sass';

import Subtitle from '../UI/Subtitle';
import Button from '../UI/Button';
import Panel from '../UI/Panel';
import Spinner from '../UI/Spinner';
import Asx from '../../hoc/Asx';

const removeProject = ({name,remove,close,loading,removed}) => {
  let content = (
    <Asx>
      <Subtitle>Do you exactly want to remove project "{name}"?</Subtitle>
      <div className={classes.controls}>
        <Button clicked={id => remove(id)}>Remove</Button>
        <Button plain offset clicked={close}>Cancel</Button>
      </div>
    </Asx>
  );
  if(loading) {
    content = <Spinner size={8} center/>;
  }
  if(removed) {
    content =(
      <Asx>
        <Subtitle>Project "{name}" successfully removed</Subtitle>
      </Asx>
    )
  }
  return (
    <Panel>
      {content}
    </Panel>
  )
};

export default removeProject;