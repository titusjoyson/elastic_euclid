import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View, Modal, TouchableOpacity, DatePickerAndroid
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { commonStyle, containerStyles } from '../common/Styles';
import MainHeading from '../components/MainHeading';
import InputBox from '../components/InputBox';
import CommonButton from '../components/Button';
import BackToLogin from '../components/BackToLogin';
import SelectLocation from '../components/SelectLocation';


export default class AdditionalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            date: "2016-05-15",
            dobText: "",
            dobObject: ""
        }
    }

    async _datepicker() {
        var today = new Date();
        var todaysdate = today.getDate();
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                this.setState({ dobText: new Date(year, month, day).toDateString() });
                this.setState({ dobObject: new Date(year, month, day) });

            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        var DismissKeyboard = require('dismissKeyboard');
        return (
            <View style={[styles.container, commonStyle.background]}>
                <MainHeading
                    landscapeFlexGrow={1}
                    portraitFlexGrow={1}
                />
                <View style={[styles.formContainer]}>

                    <View>
                        <TouchableOpacity onPress={() => { this._datepicker() }}>
                            <View style={styles.iconInputWrapper}>
                                <InputBox
                                    placeholder="Select Date of Birth"
                                    enabled={false}
                                    inputRef={(dob) => this.dob = dob}
                                    onChangeText={(text) => { this.setState({ dobText: this.state.dobText }) }}
                                    onSubmitEditing={(event) => { }}
                                    value={this.state.dobText}
                                    style={styles.input}
                                    editable={false}
                                />
                                <Icon style={styles.icon} name="calendar" size={20} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <SelectLocation />
                    <CommonButton
                        title="next"
                    />
                </View>

                <BackToLogin />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 50,
        width: 250,
        marginBottom: 20,
        color: "#FFF",
        paddingHorizontal: 10,
        fontSize: 16
    },
    iconInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        paddingHorizontal: 15,
        marginBottom: 8

    }
});