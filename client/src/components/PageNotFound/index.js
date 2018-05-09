import React from 'react';
import {Link} from 'react-router-dom';

import classes from './index.sass';

import Title from '../UI/Title';
import Button from '../UI/Button';
import Panel from '../UI/Panel';

import PageNotFoundIcon from '../../assets/icons/404-error.svg';

const pageNotFound = () => (
  <div className={classes.container}>
    <Panel>
      <Title>Page not found</Title>
      <PageNotFoundIcon className={classes.icon}/>
      <Link to="/">
        <Button>Main page</Button>
      </Link>
    </Panel>
  </div>
);

export default pageNotFound;