import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import username from './usernameReducer'
import isLoggedIn from './isLoggedInReducer'
import userId from './userIdReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  username,
  userId,
  isLoggedIn
});

export default rootReducer;