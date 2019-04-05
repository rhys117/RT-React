import * as types from './actionTypes';

export function userLoggedIn(user) {
  return { type: types.USER_LOGGED_IN, user }
}