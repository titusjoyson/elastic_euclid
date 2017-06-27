import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Animated, Text,
    FlatList,
    Image,
    Alert
} from 'react-native';

import FeedHeader from '../main/FeedHeader';
/*import FeedBody from '../main/FeedBody';*/
/*import FeedFooter from '../main/FeedFooter';*/
import Icon from 'react-native-vector-icons/FontAwesome';

import Hr from '../../components/HR';

export default class FeedItem extends Component {
    render() {
        return (
            <View style={[styles.itemContainer]}>
                <FeedHeader />
                <FeedBody />
            </View>
        )
    }
}

class FeedBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            animation: new Animated.Value(),
            maxHeight: 0
        };
    }

    _tougleAnimate(){
        const fromHeight = (!this.state.expand) ? this.state.maxHeight : 0;
        const toHeight = (!this.state.expand) ? 0 : this.state.maxHeight;
        this.state.animation.setValue(fromHeight);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: toHeight
            }
        ).start();
    }

    _colapseText() {
        this.setState({
                expand: !this.state.expand
        },this._tougleAnimate())
    }

    _setTextHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        const expandicon = (this.state.expand) ? "chevron-up" : "chevron-down";
        return (
            <View>
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
                        <Animated.View style={[styles.articletTextContainer, {height: this.state.animation}]} >
                            <Text style={[styles.articletText]}
                                numberOfLines={0}
                                onLayout={(event)=>this._setTextHeight(event)}>
                                Mark Zuckerberg and Bill Gates built billion-dollar technology companies in two very different areas,
                            but they both agree on the biggest threats to American jobs.

                            At his Harvard University commencement speech on Thursday,
                            Facebook (FB) chief executive Zuckerberg, had some tough words for the Class of 2017. </Text>
                        </Animated.View>
                    </View>
                </View>
                <View style={[styles.footer]}>
                    <Hr />
                    <View style={[styles.footerContainer]}>
                        <TouchableNativeFeedback onPress={() => { }}>
                            <View style={[styles.footerIconContaier]}>
                                <Icon style={styles.footerIcon} name="heart-o" size={18} color="#444444" />
                                <Text style={styles.footerIconText}>16 likes</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => { }}>
                            <View style={[styles.footerIconContaier]}>
                                <Icon style={styles.footerIcon} name="paper-plane-o" size={18} color="#444444" />
                                <Text style={styles.footerIconText}>5 Shares</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => { this._colapseText() }}>
                            <View style={[styles.footerIconContaier]}>

                                <Icon style={styles.footerIcon} name={expandicon} size={18} color="#444444" />

                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 0,
        backgroundColor: "white",
        marginBottom: 7,
        elevation: 2,
        padding: 2,
    },
    body: {
        flex: 1,
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
    footer: {

    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    footerIconContaier: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 35,
    },
    footerIcon: {

    },
    footerIconText: {
        paddingLeft: 10
    }
});