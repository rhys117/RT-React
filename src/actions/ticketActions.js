import * as types from './actionTypes';
import ticketApi from '../api/client';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

// export  function loadQueueNamesSuccess(queueNames) {
//   return { type: types.LOAD_QUEUE_NAMES_SUCCESS, queueNames }
// }
//
// export function loadQueueNames() {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return ticketApi.getQueueNames().then(queueNames => {
//       dispatch(loadQueueNamesSuccess(queueNames));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }