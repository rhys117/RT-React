import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function isLoggedIn(state = initialState.isLoggedIn, action) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return true;

    case types.USER_LOGGED_OUT:
      return false;

    default:
      return state;
  }
};