import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileEditOpacity extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text} >{this.props.value}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon style={styles.icon} name={this.props.iconName} size={25} color="#444444" />
                </View>
            </TouchableOpacity>
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
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    iconContainer: {
        flex: 1, 
        alignItems: "flex-end", 
        justifyContent: 'center', 
        padding: 25
    },
});