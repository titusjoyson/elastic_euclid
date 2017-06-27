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

import SliderComponent from '../../components/SliderComponent';
import FeedItem from '../main/FeedItem';
import Hr from '../../components/HR';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Feed extends Component {
    constructor(props) {
        super(props);
    }


    _renderFeed(item) {
        return (
            <FeedItem
                key={item.key}
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => this._renderFeed(item)}
                    ListHeaderComponent={()=><SliderComponent/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: 'center',
        marginHorizontal: 2
    },
    itemContainer: {
        flex: 0,
        backgroundColor: "white",
        marginBottom: 7,
        elevation: 2,
        padding: 2,
    }
});