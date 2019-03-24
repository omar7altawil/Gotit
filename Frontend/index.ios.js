/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import LoginRed from './src/Reducers/Login-red';

  const store=createStore(LoginRed)
  export default class Main extends Component {  
  render() {
    return (
      <Provider store={store} >
      <View style={styles.container}>
        <App />
      </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Gotit', () => Main);
