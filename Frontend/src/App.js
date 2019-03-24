import React, {Component} from 'react';
import {Router,Scene, Actions, ActionConst } from  'react-native-router-flux';
import LoginScreen from './components/Login/LoginScreen';
import SecondScreen from './components/Login/SecondScreen';


export default class App extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="secondScreen"
	          component={SecondScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}

