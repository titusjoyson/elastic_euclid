import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ForgotPassword extends Component {
    render() {
        return (
            <Text style={style.forgotPassword}>Forgot password? Tap here</Text>
        )
    }
}

const style = StyleSheet.create({
    forgotPassword: {
        textAlign: 'center',
        color: "rgba(255,255,255,0.9)"
    }
});