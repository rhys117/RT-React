import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logout from '../login/LogOut';

const Header = ({isLoggedIn, username}) => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light rounded-bottom">
        <NavLink exact to="/" className="navbar-brand mb-0 h1">RT React</NavLink>

        <div className="navbar-nav">
          <NavLink to="/open_tickets" className='nav-item nav-link ' activeClassName='active'>Open Tickets</NavLink>
        </div>

        <div className="navbar-right navbar-nav ml-auto">
          { isLoggedIn && <li className='nav-item nav-link'>You're signed in as {username}</li>}
          { isLoggedIn ?
            <button className='nav-item nav-link' id='logout-button' onClick={Logout}>Logout</button>
            :
            <NavLink to="/login" className='nav-item nav-link' activeClassName='active'>Login</NavLink>
          }
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string
};

export default Header;