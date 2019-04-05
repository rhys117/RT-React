import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function userIdReducer(state = initialState.userId, action) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return action.user.id;

    default:
      return state;
  }
};