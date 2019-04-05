import { USERNAME, AUTH_TOKEN, USER_ID } from "../api/constants";

export default {
  ajaxCallsInProgress: 0,
  isLoggedIn: !!localStorage.getItem(AUTH_TOKEN),
  username: localStorage.getItem(USERNAME),
  userId: localStorage.getItem(USER_ID)
};