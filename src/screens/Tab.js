import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableNativeFeedback,
    Alert,
    Animated,
    Dimensions,
    Easing,
    ViewPagerAndroid
} from 'react-native';

import { commonStyle, containerStyles } from '../common/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabItem from '../components/main/Tab';
import Home from '../screens/Tab/Home';


export default class TopTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeActive: true,
            searchActive: false,
            menuActive: false,
            aniStartValue: 0,
            aniEndValue: 0,
        }
        this.animatedValue = new Animated.Value(0)
    }

    animate(toVal) {
        Animated.timing(
            this.animatedValue,
            {
                toValue: toVal,
                duration: 300
            }
        ).start()
    }

    _setActiveTab(actTab) {
        this.setState({
            homeActive: (actTab == "homeActive") ? true : false,
            searchActive: (actTab == "searchActive") ? true : false,
            menuActive: (actTab == "menuActive") ? true : false,
        });
    }

    render() {
        var { height, width } = Dimensions.get('window');
        const numberOfTabs = 3;
        const containerWidth = width;

        const tabUnderlineStyle = {
            flex: 0,
            width: containerWidth / numberOfTabs,
            height: 4,
            backgroundColor: "#e54d42",
            bottom: 0,

        }

        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs],
        })

        return (
            <View style={[styles.wrapper, commonStyle.inpageBackground]}>
                <View style={styles.topContainer}>
                    <View style={styles.container}>
                        <TabItem
                            status={this.state.homeActive}
                            onPress={() => { this.animate(0); this._setActiveTab("homeActive") }}
                            name="home"
                            ref="home"
                        />
                        <TabItem
                            status={this.state.searchActive}
                            onPress={() => { this.animate(1); this._setActiveTab("searchActive") }}
                            name="search"
                            ref="search"
                        />
                        <TabItem
                            status={this.state.menuActive}
                            onPress={() => { this.animate(2); this._setActiveTab("menuActive") }}
                            name="bars"
                            ref="bars"
                        />
                    </View>
                    <Animated.View style={[tabUnderlineStyle, { marginLeft: movingMargin },]} />
                </View>
                <ViewPagerAndroid 
                    style={{flex:1,flexDirection: "column", justifyContent: "flex-start"}}
                    scrollEnabled={true}
                    initialPage={0}>
                    <Home/>
                </ViewPagerAndroid>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    topContainer: {
        height: 60,
        elevation: 3,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "#bbbbbb",
    },
    container: {
        flex: 1,
        flexDirection: "row",
    }
});