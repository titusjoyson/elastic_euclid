import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback, Alert
} from 'react-native';


export default class ForgotPassword extends Component {

    _redirectToForgotPassword() {
        Alert.alert("No page to redirect")
    }

    render() {
        return (
            <View style={{flex:1,flexDirection: 'row',}}>
                <View style={style.touchSapLeft}>
                    <TouchableNativeFeedback
                        onPress={this._redirectToForgotPassword}
                    >
                        <View>
                            <Text style={style.signUp}>Sign Up</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={style.touchSapRight}>
                    <TouchableNativeFeedback
                        onPress={this._redirectToForgotPassword}
                    >
                        <View>
                            <Text style={style.forgotPassword}>Forgot password? Tap here</Text>
                        </View>

                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    forgotPassword: {
        textAlign: 'right',
        color: "rgba(255,255,255,0.9)",
    },
    signUp:{
        textAlign: 'left',
        color: "rgba(255,255,255,0.9)",
    },
    touchSapLeft: {
        flex: 1,
        width: 50,
        paddingLeft: 5
    },
    touchSapRight: {
        flex: 2,
        width: 50,
        paddingRight: 5
    }
});