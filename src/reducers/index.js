import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import username from './usernameReducer'
import isLoggedIn from './isLoggedInReducer'

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  username,
  isLoggedIn
});

export default rootReducer;