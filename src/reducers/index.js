import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
// eg
  // courses,
  // authors,
  ajaxCallsInProgress
});

export default rootReducer;