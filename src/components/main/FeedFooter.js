import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Animated, Text,
    FlatList,
    Image,
    TouchableHighlight
} from 'react-native';

import SliderComponent from '../../components/SliderComponent';
import Hr from '../../components/HR';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FeedFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
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
                    <TouchableNativeFeedback onPress={()=>{ } }>
                        <View style={[styles.footerIconContaier]}>

                            <Icon style={styles.footerIcon} name={this.props.tougleIcon} size={18} color="#444444" />

                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer:{

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