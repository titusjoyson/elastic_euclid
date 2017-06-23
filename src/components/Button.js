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

class WhiteButton extends Component {
    render() {
        return(
            <TouchableOpacity 
                style={style.whiteButton}
                { ...this.props }>
                <Text style={style.whiteButtonText} >{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
module.exports = {WhiteButton};

const style = StyleSheet.create({
    button:{
        marginBottom: 20,
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingVertical: 10,
        borderRadius: 8
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '500',
        color: 'rgba(51,51,51,0.7)'
    },
    whiteButton: {
        justifyContent: "center",
        marginBottom: 20,
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "rgba(232,78,64,1)"
    },
    whiteButtonText: {
        textAlign: 'center',
        fontWeight: '400',
        color: 'rgba(232,78,64,1)'
    },
})