import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './index.sass';

import MenuIcon from '../../assets/icons/menu.svg';
import EnvelopeIcon from '../../assets/icons/envelope.svg';
import CloseIcon from '../../assets/icons/cancel.svg';

class Header extends Component {
  state = {
    shownNav: false,
    navs: [
      {
        text: 'Main',
        path: '/'
      },
      {
        text: 'About me',
        path: '/profile'
      },
      {
        text: 'Projects',
        path: '/projects'
      },
      {
        text: 'Contacts',
        path: '/contacts'
      },
      {
        text: 'Admin panel',
        path: '/admin'
      }
    ]
  };
  toggleMenuHandler = () => {
    this.setState({
      ...this.state,
      shownNav: !this.state.shownNav
    });
  };
  render() {
    const {white} = this.props;
    const iconClasses = [
      classes.icon,
      white && classes.iconWhite
    ];
    let menu = <div className={classes.bg}>
      <button className={classes.close} onClick={this.toggleMenuHandler}>
        <CloseIcon className={classes.closeIcon}/>
      </button>
      <nav className={classes.nav}>
        {this.state.navs.map(({text,path}) => (
          <Link to={path} className={classes.navItem}>
            {text}
          </Link>
        ))}
      </nav>
    </div>;
    if(!this.state.shownNav) {
      menu = null;
    }
    return (
      <header className={classes.container}>
        {!this.state.shownNav && <button className={classes.menu} onClick={this.toggleMenuHandler}>
          <MenuIcon className={iconClasses.join(' ')}/>
        </button>}
        <Link to="/message" className={classes.message}>
          <EnvelopeIcon className={iconClasses.join(' ')}/>
        </Link>
        {menu}
      </header>
    )
  }
}

export default Header;