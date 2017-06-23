import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Animated,Text,
    Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {status} = this.props;
        const opacity = status ?  1 : 0.5
        const hisglite = status ?  '#e54d42' : '#333333'

        return (
            <TouchableNativeFeedback
                status={()=>{this.props.status}}
                onPress={this.props.onPress}>
                <View style={styles.containerItem} >
                    <Icon style={{ opacity: opacity }}
                        name={this.props.name}
                        size={20}
                        color={hisglite} />
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});