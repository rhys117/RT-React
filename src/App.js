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
// import {loadQueueNames} from "./actions/ticketActions";
import './styles/styles.scss';
import Layout from './components/Layout';

const store = configureStore();
// store.dispatch(loadQueueNames());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={ApolloClient}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;