import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import eyeImg from '../../images/eye_black.png';
import {connect} from 'react-redux'
import {Getname} from './../../Redux/Actions/index'
import {Getpass} from './../../Redux/Actions/index'
import {Show} from './../../Redux/Actions/index'

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (   
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          value={this.props.username}
          onChangeText={(value) => this.props.Getname(value)}
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <UserInput
          value={this.props.password}
          onChangeText={(value) => this.props.Getpass(value)}
          source={passwordImg}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          source2={eyeImg}
          showPass={this.props.show}
          press={this.props.Show}
        />
      </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
function mapStateToProps(state){
  console.log(state)
  return {
    username:state.username,
    password:state.password,
    show:state.show
  }
}
export default connect(mapStateToProps,{Getname,Getpass,Show})(Form);