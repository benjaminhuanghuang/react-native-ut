import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';
import RepoPage from './app/containers/RepoPage';

export default class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <RepoPage />
      </Provider>
    );
  }
}