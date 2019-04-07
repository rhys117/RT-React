import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import AboutPage from './components/about/AboutPage';
import OpenTicketsPage from './components/request_tracker/ticket/OpenTicketsPage';
import UserDefaultView from './components/request_tracker/user/DefaultView';

const Routes = ({isLoggedIn}) => {
  return (
    <div>
      <Route path="/" exact component={isLoggedIn ? UserDefaultView : HomePage}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/open_tickets" component={OpenTicketsPage}/>
    </div>
  )
};

export default Routes