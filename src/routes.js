import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import AboutPage from './components/about/AboutPage';


export default (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </div>
);