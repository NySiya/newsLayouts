import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/reducers/configureStore';

import { Routes } from './src/routes';

const store = configureStore();

class NewsLayouts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('newsLayout', () => NewsLayouts);
