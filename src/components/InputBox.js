import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, TextInput, Alert
} from 'react-native';

export default class InputBox extends Component {

    render(){
        return(
            <TextInput
                style = {style.input}
                underlineColorAndroid='rgba(255,255,255,0.7)' 
                placeholderTextColor = "rgba(255,255,255,0.6)"
                ref = {this.props.inputRef}
                placeholder = {this.props.placeholder}
                secureTextEntry={this.props.typePassword}
                returnKeyType = {this.props.returnKeyType}
                onSubmitEditing = {this.props.onSubmitEditing}
            />
        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        marginBottom: 20,
        color: "#FFF",
        paddingHorizontal: 10,
        fontSize: 16
    }
})