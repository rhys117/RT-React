import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { USERNAME } from "../../api/constants";

const LoggedOutNavItems = () => {
  return <Link to="/login">Login</Link>
};

const LoggedInNavItems = (username) => {
  return (
    <ul className="navbar-nav">
      <Link to="/logout">Logout</Link>
      <li>{`signed in as ${username}`}</li>
    </ul>
  )
};

const Header = () => {
  let username = localStorage.getItem(USERNAME);

  let end_nav_items = '';
  if (username) {
    end_nav_items = LoggedInNavItems(username)
  } else {
    end_nav_items = LoggedOutNavItems
  }

  return (
    <header>
      <nav className='navbar navbar-light bg-light'>
        <NavLink to="/">Home</NavLink>
        {" | "}
        <Link to="/open_tickets">Open Tickets</Link>
        {" | "}
        { end_nav_items }
      </nav>
    </header>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;