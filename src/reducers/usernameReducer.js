import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function usernameReducer(state = initialState.username, action) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return action.username;

    default:
      return state;
  }
};