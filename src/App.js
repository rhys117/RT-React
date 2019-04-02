import React, { Component } from 'react';
// import logo from './logo.svg';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from './api/client';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.scss';
import Layout from './components/Layout';
import initialState from "./reducers/initialState";

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;