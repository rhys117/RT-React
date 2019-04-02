import * as types from './actionTypes';

export function userLoggedIn(username) {
  return { type: types.USER_LOGGED_IN, username }
}
