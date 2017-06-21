import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileViewItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon style={styles.icon} name={this.props.iconName} size={25} color="#444444" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text} >{this.props.value}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    iconContainer: {
        flex: 1, 
        alignItems: "center", 
        padding: 20,
    },
    icon: {
        opacity: 0.9
    },
    text: {
        fontSize: 15,
        color: "black",
    },
    textContainer: {
        flex: 9, 
        alignItems: "flex-start", 
        justifyContent: 'center', 
        paddingVertical: 20,
        paddingHorizontal: 0
    }
});