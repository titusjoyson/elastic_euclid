import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {commonStyle, containerStyles} from '../common/Styles';
import MainHeading from '../components/MainHeading.js';

export default class Login extends Component {
  render(){
    return(
      <View style={[styles.container, commonStyle.background]}>
        <View style={[headerContStyle.topContainer]}>
          <MainHeading/>
        </View>
        <View>

        </View>
        <View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const headerContStyle = StyleSheet.create({
  topContainer: {
    flex: 1,
    marginTop: 100
  }
});