import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import commonStyle from '../common/Styles';
import MainHeading from '../components/MainHeading';

export default class elastic_euclid extends Component {
  render() {
    return (
      <View style={[styles.container, commonStyle.background]}>
        <MainHeading/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
