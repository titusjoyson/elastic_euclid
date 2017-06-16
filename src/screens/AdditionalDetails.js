import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Modal, TouchableHighlight
} from 'react-native';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal';

import { commonStyle, containerStyles } from '../common/Styles';
import MainHeading from '../components/MainHeading';
import InputBox from '../components/InputBox';
import CommonButton from '../components/Button';
import BackToLogin from '../components/BackToLogin';
import SelectLocation from '../components/SelectLocation';

const NORTH_AMERICA = ['CA', 'MX', 'US'];

export default class AdditionalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    render() {
        return (
            <View style={[styles.container, commonStyle.background]}>

                <MainHeading
                    landscapeFlexGrow={1}
                    portraitFlexGrow={1}
                />
                <View style={[styles.formContainer]}>
                    <InputBox
                        placeholder="Select Date of Birth"
                        secureTextEntry={true}
                        returnKeyType="go"
                        inputRef={(dob) => this.dob = dob}
                        onSubmitEditing={(event) => { }}
                    />
                    <SelectLocation />
                </View>
                <CommonButton
                    title="next"
                />
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
        padding: 20,
    }
});