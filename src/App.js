import React, { Component } from 'react';
// import logo from './logo.svg';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
// import {loadCourses} from "./actions/courseActions";
import './styles/styles.scss';
import Layout from './components/Layout';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;