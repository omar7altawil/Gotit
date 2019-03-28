import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
        <GoogleSigninButton
      style={width: 192, height: 48 }
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark} />
      </Wallpaper>
    );
  }
}
