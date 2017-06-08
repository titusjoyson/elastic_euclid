import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback, Alert
} from 'react-native';


export default class BackToLogin extends Component {

    _redirectToLogin(){
        Alert.alert("No page to redirect")
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this._redirectToLogin}
            >
                <View>
                    <Text style={style.backToLogin}>Back to Login</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const style = StyleSheet.create({
    backToLogin: {
        textAlign: 'center',
        color: "rgba(255,255,255,0.9)",
    }
});