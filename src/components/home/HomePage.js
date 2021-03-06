import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Request Tracker: React</h1>
        <p>Interface for ticketing system.</p>
        <Link to="login" className="btn btn-primary btn-lg">Login</Link>
      </div>
    );
  }
}

export default HomePage;