import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    DatePickerAndroid,
    Modal
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { commonStyle, containerStyles } from '../common/Styles';
import TopTab from '../components/main/MainTab';



export default class ProfileEditPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    render() {
        return (
            <View style={[styles.container, commonStyle.inpageBackground]}>
                <TopTab/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    }
});