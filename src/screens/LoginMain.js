import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, ScrollView
} from 'react-native';

import { commonStyle, containerStyles } from '../common/Styles';
import MainHeading from '../components/MainHeading';
import InputBox from '../components/InputBox';
import CommonButton from '../components/Button';
import ForgotPassword from '../components/ForgotPassword';


export default class Login extends Component {

  render() {
    return (
      <View style={[styles.container, commonStyle.background]}>
        <MainHeading />
        <View style={[styles.formContainer]}>
          <InputBox
            placeholder="Email or username"
            returnKeyType="next"
            inputRef='usenameFeald'
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <InputBox
            placeholder="Password"
            secureTextEntry={true}
            returnKeyType="go"
            inputRef={(passwordInput) => this.passwordInput = passwordInput}
            onSubmitEditing={(event) => { }}
          />
          <CommonButton
            title="Login"
          />
          <ForgotPassword />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 1,
    padding: 20,
  }
});
