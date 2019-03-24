import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, TextInput, Image,TouchableOpacity} from 'react-native';

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.showPass}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.props.press}>
          <Image source={this.props.source2} style={styles.iconEye} />
        </TouchableOpacity>
      </View>
    );
  }
}
UserInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  btnEye: {
    position: 'absolute',
    left: DEVICE_WIDTH - 60,
    top: 9,
  },
});

