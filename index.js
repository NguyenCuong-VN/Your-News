/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './src/redux/reducers/index';

const store = createStore(allReducers, applyMiddleware(thunk));
const AppBegin = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => AppBegin);
