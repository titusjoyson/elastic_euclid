import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class ImageContainer extends Component {
    render() {
        return (
            <View style={styles.profileImageSe}>
                <View style={styles.profileImage}>
                    <Image
                        style={styles.profileImageContainer}
                        resizeMode="contain"
                        source={require('../../static/images/actor3.jpg')}
                    />
                </View>
                <View style={styles.imageFooter}>
                    <Text style={styles.headline}>Titus Joyson</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileImageSe: {
        flex: 4.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    profileImage: {
        flex: 1,
    },
    imageFooter: {
        backgroundColor: "rgba(232,78,64,0.8)",
        alignSelf: 'center',
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    headline: {
        color: "#FFF",
        alignSelf: 'center',
        fontSize: 20
    }
});