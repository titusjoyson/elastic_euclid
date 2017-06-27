import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Alert,
    Animated,
    Dimensions,
    Easing,
    ViewPagerAndroid,
    Image,
    TouchableOpacity
} from 'react-native';

import { commonStyle, containerStyles } from '../common/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

export default class SliderComponent extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const sliderWidth = Dimensions.get('window').width;
        var newsData = [
            { title: "When Bill Gates and Mark Zuckerbergs sound the same dire warning about ..." },
            { title: "When Bill Gates and Mark Zuckerbergs sound the same dire warning about ..." },
            { title: "When Bill Gates and Mark Zuckerbergs sound the same dire warning about ..." },
            { title: "When Bill Gates and Mark Zuckerbergs sound the same dire warning about ..." },
            { title: "When Bill Gates and Mark Zuckerbergs sound the same dire warning about ..." },
            { title: "When Bill Gates and Mark Zuckerbergs sound the same dire warning about ..." },
        ];
        const newsItem = newsData.map((news, key) => {
            return (
                
                <View key={key} style={[styles.topNewsItem, { backgroundColor: "gray", }]}>
                    <TouchableOpacity style={{flex:1}}>
                    <View style={styles.canvasContainer}>
                        <Image
                            style={styles.profileImage}
                            resizeMode="stretch"
                            source={require('../static/images/actor2.jpg')}
                        />
                    </View>
                    <View style={styles.footerItems}>
                        <Text style={styles.footerItemsText}>{news.title}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                
            )
        })

        return (
            <View style={styles.container}>
                <Carousel
                    ref={(carousel) => { this._carousel = carousel; }}
                    sliderWidth={sliderWidth}
                    itemWidth={250}
                    slideStyle={styles.pagerStyle}
                    inactiveSlideScale={1}
                    carouselHorizontalPadding={5}
                >
                    {newsItem}
                </Carousel>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        marginLeft: 0,
        height: 180
    },
    topNewsItem: {
        flex: 1,
        width: 250,
        backgroundColor: "rgba(232,78,64,0.9)",
        marginRight: 6,
        elevation: 3
    },
    pagerStyle: {
        flex: 1,
    },
    footerItems: {
        position: "absolute",
        backgroundColor: "rgba(232,78,64,0.9)",
        bottom: 0,
        left: 0,
        right: 0
    },
    footerItemsText: {
        color: "#FFF",
        padding: 8,
        height: 80,
        fontSize: 15,
        fontWeight: '500'
    },
    canvasContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'relative'
    },
    profileImage: {
        position: 'absolute',
    }
});