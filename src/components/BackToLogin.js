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
                style={style.container}
            >
                <View style={style.textWrapper}>
                    <Text style={style.backToLogin}>Back to Login</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    textWrapper:{
        padding: 15
    },
    backToLogin: {
        textAlign: 'center',
        color: "rgba(255,255,255,0.9)",
    }
});