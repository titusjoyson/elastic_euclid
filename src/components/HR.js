import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';


export default class Hr extends Component{
    render(){
        return(<View
            style={[styles.hr]}
        />)
    }
} 

const styles = StyleSheet.create({
    hr:{
        borderBottomColor: '#999999',
        borderBottomWidth: 1,
        marginHorizontal: 10
    }
})