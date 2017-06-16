import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { commonStyle, containerStyles } from '../common/Styles';
import MainHeading from '../components/MainHeading';
import InputBox from '../components/InputBox';
import CommonButton from '../components/Button';
import BackToLogin from '../components/BackToLogin';

export default class ForgotPasswordPage extends Component {

  render() {
    return (
      <View style={[styles.container, commonStyle.background]}>
        <MainHeading 
            landscapeFlexGrow = {1}
            portraitFlexGrow = {1}
        />
        <View style={[styles.formContainer]}>
          <InputBox
            placeholder="Enter your Email"
            secureTextEntry={true}
            returnKeyType="go"
            inputRef={(passwordInput) => this.passwordInput = passwordInput}
            onSubmitEditing={(event) => { }}
          />
          <CommonButton
            title="Login"
          />
        </View>
        <BackToLogin/>
        

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