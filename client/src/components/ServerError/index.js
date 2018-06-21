import React from 'react';
import {Link} from 'react-router-dom';

import classes from './index.sass';

import Title from '../UI/Title';
import Button from '../UI/Button';
import Panel from '../UI/Panel';
import Subtitle from '../UI/Subtitle';

import ErrorIcon from '../../assets/icons/warning.svg';

const serverError = ({error}) => (
  <div className={classes.container}>
    <Panel>
      <Title>Server Error</Title>
      <Subtitle>Please reload the page and try again to {error} or try later</Subtitle>
      <ErrorIcon className={classes.icon}/>
      <a href="/">
        <Button>Main page</Button>
      </a>
    </Panel>
  </div>
);

export default serverError;