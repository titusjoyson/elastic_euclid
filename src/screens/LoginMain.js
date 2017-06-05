import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {commonStyle, containerStyles} from '../common/Styles';
import MainHeading from '../components/MainHeading';
import InputBox from '../components/InputBox';
import CommonButton from '../components/Button';
import ForgotPassword from '../components/ForgotPassword';

export default class Login extends Component {


  render(){
    return(
      <View style={[styles.container, commonStyle.background]}>
        <View style={[headerContStyle.topContainer]}>
          <MainHeading/>
        </View>
        <View style={[formStyle.container]}>
          <InputBox
            placeholder = "Email or username"
            returnKeyType = "next"
            inputRef = 'usenameFeald'
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <InputBox
            placeholder = "Password"
            secureTextEntery = {"true"}
            returnKeyType = "go"
            inputRef = {(passwordInput) => this.passwordInput = passwordInput}
            typePassword = {true}
            onSubmitEditing={(event)=>{}}
          />
          <CommonButton
              title = "Login"
          />
          <CommonButton
              title = "Sign Up"
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
    alignItems: 'center',
  }
});

const headerContStyle = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  }
});

const formStyle = StyleSheet.create({
  container: {
    padding: 20
  }
});