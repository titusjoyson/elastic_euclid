import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var MainHeading = React.createClass({
  render(){
    return(
      <Text style={styles.mainHeading}>
          FishHook
      </Text>
    )
  }
})

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: "#FFFFFF",
    opacity: 0.9,
  },
});

module.exports = MainHeading