import React from 'react';

import classes from './index.sass';

const title = ({white,children,Icon,name}) => {
 const cssClasses = [classes.title,
   white && classes.white,
   Icon && classes.withIcon,
   name && classes.name
 ];
 return (
   <h1
     className={cssClasses.join(' ')}
   >
     {Icon && <Icon className={classes.icon}/>}
     {children}
   </h1>
 );
};

export default title;