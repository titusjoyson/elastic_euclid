import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Animated, Text,
    FlatList,
    Image,
    UIManager
} from 'react-native';

import SliderComponent from '../../components/SliderComponent';
import Hr from '../../components/HR';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FeedBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return (
            <View style={[styles.body]}>
                <View style={[styles.bodyHeaderImageWrapper]}>
                    <Image
                        style={styles.bodyHeaderImage}
                        source={require('../../static/images/actor3.jpg')}
                        resizeMode="cover"
                    />
                    <View style={[styles.bodyTagWrapper]}>
                        <Text style={[styles.bodyTags]}>#Robot</Text>
                    </View>
                </View>
                <View style={[styles.textContainer]}>
                    <View style={[styles.articletTitleContainer]}>
                        <Text style={[styles.articletTitle]}>When Bill Gates and Mark Zuckerbergs sound the same dire warning about ...</Text>
                    </View>
                    <View style={[styles.articletTextContainer]} >
                        <Text style={[styles.articletText]}
                            numberOfLines={2}>
                            Mark Zuckerberg and Bill Gates built billion-dollar technology companies in two very different areas,
                            but they both agree on the biggest threats to American jobs.

                            At his Harvard University commencement speech on Thursday,
                            Facebook (FB) chief executive Zuckerberg, had some tough words for the Class of 2017. </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    bodyHeaderImageWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyHeaderImage: {
        height: 200
    },
    bodyTagWrapper: {
        position: "absolute",
        bottom: 0,
        left: 0
    },
    bodyTags: {
        backgroundColor: "#e54d42",
        color: "#FFF",
        padding: 4,
        marginLeft: 10,
        marginBottom: 8
    },
    textContainer: {
        margin: 10
    },
    articletTitle: {
        color: "#101010",
        fontWeight: "500",
        fontSize: 15,
        opacity: 8,
        lineHeight: 20
    },
    articletTextContainer: {
        marginTop: 10
    },
    articletText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#262626",
    },
});