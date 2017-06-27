import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Slider,
    TouchableNativeFeedback,
    Alert,
    Animated,
    Dimensions,
    Easing,
    ScrollView
} from 'react-native';

import { commonStyle, containerStyles } from '../../common/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from '../../components/main/Feed';

export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
                <View style={[styles.feedContainer]}>
                    <Feed

                    />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    feedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});