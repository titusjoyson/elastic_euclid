import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Dimensions
} from 'react-native';

export default class MainHeading extends Component {
  constructor(){
    super();
    var {height, width} = Dimensions.get('window');
    if(height > width){
      this.state = { container: styles.portraitContainer }
    }else{
      this.state = { container: styles.landscapeContainer }
    }
  }

  _setPageOrientationStyle(){
    var {height, width} = Dimensions.get('window');
    if(height > width){
      this.setState({ container: styles.portraitContainer })
    }else{
      this.setState({ container: styles.landscapeContainer })
    }
  }

  render() {
    return (
      <View style={[this.state.container]}
            onLayout={(event)=>{this._setPageOrientationStyle()}}
      >
        <Text style={styles.mainHeading}>
          FishHook
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: "#FFFFFF",
    opacity: 0.9,
  },
  landscapeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.4,
  },
  portraitContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.7,
  },
});