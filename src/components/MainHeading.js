import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Dimensions
} from 'react-native';

export default class MainHeading extends Component {
  constructor(props){
    super(props);
    var {height, width} = Dimensions.get('window');

    /* Change flexgrow from parent */
    if(height > width){
      this.state = { container: styles.portraitContainer };
      if(this.props.portraitFlexGrow){
        this.state = { flexgrow: this.props.portraitFlexGrow}
      }else{
        this.state = { flexgrow: 0.7}
      }
    }else{
      this.state = { container: styles.landscapeContainer }
      if(this.props.landscapeFlexGrow){
        this.state = { flexgrow: this.props.landscapeFlexGrow}
      }else{
        this.state = { flexgrow: 0.3}
      }
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
      <View style={[this.state.container, {flexGrow: this.state.flexgrow}]}
            onLayout={(event)=>{this._setPageOrientationStyle()}}
            { ...this.props }
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
    justifyContent: 'center'
  },
  portraitContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});