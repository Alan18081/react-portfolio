import React from 'react';
import {Link} from 'react-router-dom';

import classes from './index.sass';

import Title from '../UI/Title';
import Functions from '../Functions';
import Panel from '../UI/Panel';

import EditIcon from '../../assets/icons/edit.svg';
import DeleteIcon from '../../assets/icons/delete-button.svg';


const adminProject = ({edit,remove,project}) => (
  <Panel
    animated={false}
  >
    <div className={classes.header}>
      <div className={classes.image}>
        <img src={`/uploads/projects/${project.get('mainImage')}`} alt="Main"/>
      </div>
      <div className={classes.caption}>
        <div>
          <Title name>{project.get('projectName')}</Title>
          <h4 className={classes.type}>{project.get('appType')}</h4>
        </div>
        <div className={classes.controls}>
          <Link to={`/admin/editProject/${project.get('_id')}`} className={classes.controlsBtn} onClick={edit}>
            <EditIcon className={classes.controlsIcon}/>
          </Link>
          <button className={classes.controlsBtn} onClick={() => remove(project.get('_id'))}>
            <DeleteIcon className={classes.controlsIcon}/>
          </button>
        </div>
      </div>
    </div>
    <div className={classes.content}>
        <Functions
          list={project.get('functions')}
        />
        <div className={classes.tech}>
          {project.get('technologies').map(tech => (
            <div key={tech.get('name')} className={classes.techItem}>
              {tech.get('name')}
            </div>
          ))}
        </div>
        <div className={classes.images}>
          {project.get('images').map(image => (
            <div key={image} className={classes.imageItem}>
              <img src={`/uploads/projects/${image}`} alt="Project"/>
            </div>
          ))}
        </div>
      </div>
  </Panel>
);

export default adminProject;