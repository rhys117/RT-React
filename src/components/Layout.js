// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import {connect} from 'react-redux';
import Routes from './../routes';

class Layout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          isLoggedIn={this.props.isLoggedIn}
          username={this.props.username}
        />
        <Routes isLoggedIn={this.props.isLoggedIn} />
      </div>
    );
  }
}

Layout.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.isLoggedIn,
    username: state.username
  };
}

export default connect(mapStateToProps)(Layout);