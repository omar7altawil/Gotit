import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class Google extends Component {

render() {
  <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this._signIn}
    disabled={this.state.isSigninInProgress} />
    }
}