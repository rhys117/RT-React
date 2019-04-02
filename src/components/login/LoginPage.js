import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN, USERNAME } from '../../api/constants'
import toastr from 'toastr';

const LOGIN_MUTATION = gql`
  mutation signinUserMutation($username: String!, $password: String!) {
    signinUser(credentials: {
      username: $username,
      password: $password
    })
    {
      token
      user {
        name
      }
    }
  }
`;

class Login extends Component {

  state = {
    username: '',
    password: '',
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className='card login-card'>
        <div className='card-body'>
          <h4>Login</h4>
          <Mutation
            mutation={LOGIN_MUTATION}
            variables={{ username, password }}
            onCompleted={data => this._confirm(data)}
          >
            {(signInUser) => (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  signInUser();
                }}
              >
                <div>
                  <input
                    value={username}
                    onChange={e => this.setState({ username: e.target.value })}
                    type="text"
                    className='form-control login-input'
                    placeholder="Your RT username"
                  />
                </div>
                <div>
                  <input
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                    type="password"
                    className='form-control login-input'
                    placeholder="Your RT password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            )}
          </Mutation>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    if (data.signinUser == null) {
      toastr.error('Invalid credentials.', 'Login Failed.')
    } else {
      this._saveUserData(data.signinUser);
      toastr.success(`Welcome ${localStorage.getItem(USERNAME)}.`, 'Login Success.');
      this.props.history.push(`/`)
    }
  };

  _saveUserData = signinUser_data => {
    localStorage.setItem(AUTH_TOKEN, signinUser_data.token);
    localStorage.setItem(USERNAME, signinUser_data.user.name);
    this.props.actions.userLoggedIn(signinUser_data.user.name);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    username: state.username
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

