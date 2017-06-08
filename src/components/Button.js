import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, TextInput,
  TouchableOpacity
} from 'react-native';

export default class CommonButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                style={style.button}
                { ...this.props }>
                <Text style={style.buttonText} >{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    button:{
        marginBottom: 20,
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingVertical: 10,
        borderRadius: 8
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '500',
        color: 'rgba(51,51,51,0.7)'
    }
})