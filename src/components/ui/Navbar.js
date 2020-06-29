import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/bellotero.svg';
import { Link, NavLink } from 'react-router-dom';
import navbarStyle from '../../constants/navbarStyle';

const Navbar = ({ menu }) => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand' style={navbarStyle.brand}>
        <Link className='navbar-item' to='/'>
          <img alt='logo' src={Logo} width='112' height='28' />
        </Link>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start' style={navbarStyle.items}>
          {menu.routes.map((navItem, index) => (
            <NavLink
              activeClassName='active'
              className='navbar-item'
              style={navbarStyle.itemsLink}
              exact
              to={`/${navItem.route}`}
              key={index}
            >
              {navItem.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  menu: PropTypes.object.isRequired,
};
export default Navbar;
