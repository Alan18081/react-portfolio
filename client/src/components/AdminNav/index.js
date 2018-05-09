import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Navbar from 'react-responsive-navbar';

import classes from './index.sass';

import AdminMenuIcon from '../../assets/icons/admin_menu.svg';
import CloseIcon from '../../assets/icons/error_circle.svg';

const NAV = [
  {
    text: 'Dashboard',
    link: '/admin/dashboard'
  },
  {
    text: 'Profile',
    link: '/admin/profile'
  },
  {
    text: 'Skills',
    link: '/admin/skills'
  },
  {
    text: 'Projects',
    link: '/admin/projects'
  },
  {
    text: 'Contacts',
    link: '/admin/contacts'
  }
];


class AdminNav extends Component {
  state = {
    shownMenu: false
  };
  componentDidMount() {
    window.addEventListener('resize', () => {
      if(window.innerWidth < 768 && this.state.shownMenu) {
        this.setState({
          shownMenu: false
        })
      }
      else {
        this.setState({
          shownMenu: true
        })
      }
    });
  }
  toggleMenu = () => {
    this.setState({
      shownMenu: !this.state.shownMenu
    });
  };
  render() {
    return (
      <nav className={classes.container}>
        <Navbar
          changeMenuOn="768px"
          menu={<div className={classes.menu}>
            {NAV.map(({text,link}) => (
              <NavLink key={link} to={link} className={classes.link} activeClassName={classes.active}>
                {text}
              </NavLink>
            ))}
          </div>}
          menuOpenButton={<button className={classes.btn} onClick={this.toggleMenu}>
            <AdminMenuIcon className={classes.icon}/>
            Admin menu
          </button>}
          menuCloseButton={<button className={classes.btn} onClick={this.toggleMenu}>
            <CloseIcon className={classes.icon}/>
            Admin menu
          </button>}
        />

        {/*<CSSTransition*/}
          {/*in={this.state.shownMenu || window.innerWidth > 768}*/}
          {/*timeout={300}*/}
          {/*mountOnEnter*/}
          {/*unmountOnExit*/}
          {/*classNames={{*/}
            {/*enter: classes.enter,*/}
            {/*enterActive: classes.enterActive,*/}
            {/*exit: classes.exit,*/}
            {/*exitActive: classes.exitActive*/}
          {/*}}*/}
        {/*>*/}

        {/*</CSSTransition>*/}
      </nav>
    );
  }
}

export default AdminNav;