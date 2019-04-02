export default {
  ajaxCallsInProgress: 0,
  isLoggedIn: !!localStorage.getItem('auth-token'),
  username: localStorage.getItem('username')
};