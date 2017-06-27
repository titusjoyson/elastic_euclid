import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Animated, Text,
    FlatList,
    Image
} from 'react-native';

import SliderComponent from '../../components/SliderComponent';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FeedHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={[styles.header]}>
                <View style={styles.headerImageWrapper}>
                    <Image
                        style={styles.headerImage}
                        source={require('../../static/images/actor3.jpg')}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.headerTextWrapper}>
                    <Text style={[styles.sourceTitle]}>Life Hacker</Text>
                    <Text style={[styles.sourceTime]}>1 Hrs before</Text>
                </View>
                <View style={styles.headerIconWrapper}>
                    <Icon style={styles.icon} name="ellipsis-h" size={25} color="#444444" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        height: 50,
    },
    icon: {
        opacity: 0.5
    },
    headerImageWrapper: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "flex-start",
    },
    headerImage: {
        alignSelf: "center",
        opacity: 4,
        width: 40,
        height: 40,
    },
    headerTextWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingLeft: 10
    },
    headerIconWrapper: {
        justifyContent: 'center',
        alignItems: "center",
        width: 50,
    },
    sourceTitle: {
        fontWeight: "500",
        color: "#101010",
        opacity: 9,
        padding: 1
    },
    sourceTime: {
        padding: 1
    },
});