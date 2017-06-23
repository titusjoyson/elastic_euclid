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
import ImageContainer from '../components/profile/ImageContainer';
import InputBox from '../components/InputBox';
import { CommonButton, WhiteButton } from '../components/Button';
import SelectLocation from '../components/SelectLocation';
import ModalTextEdit from '../components/ModalTextEdit';



export default class ProfileEditPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,

            newfullname: "",
            newdob: "",
            newlocation: "",

            fullName: "Titus Joyson",

            dobText: "Born in June 10, 1994",
            dobObject: ""
        };
    }
    
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    async _datepicker() {
        var today = new Date();
        var todaysdate = today.getDate();
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                this.setState({ dobText: "Born in "+moment(new Date(year, month, day)).format("MMM DD, YYYY") });
                this.setState({ dobObject: new Date(year, month, day) });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
            <View style={[styles.container, commonStyle.inpageBackground]}>
                <ImageContainer />
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon style={styles.icon} name="camera" size={25} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.lowerBlockSe}>
                    <View style={styles.lowerBlockHeading}>
                        <Text style={styles.lowerBlockHeadingText}>@titusjoyson</Text>
                    </View>
                    <View style={styles.containerBlock}>
                        <TouchableOpacity onPress={(event) => { this.setModalVisible(true) }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name"
                                returnKeyType="next"
                                ref='usenamefield'
                                value={this.state.fullName}
                                onSubmitEditing={() => this.refs.dobfield.focus()}
                                underlineColorAndroid='rgba(93,93,93,1)'
                                placeholderTextColor="rgba(16,16,16,0.7)"
                                editable={false}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this._datepicker() }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Date of birth"
                                returnKeyType="next"
                                ref='dobfield'
                                value={this.state.dobText}
                                onSubmitEditing={() => this.refs.locationfield.focus()}
                                underlineColorAndroid='rgba(93,93,93,1)'
                                placeholderTextColor="rgba(16,16,16,0.7)"
                                editable={false}
                            />
                        </TouchableOpacity>
                        <SelectLocation
                                returnKeyType="go"
                                ref='locationfield'
                                defaultValue="Living in Chennai, Tamilnadu, India"
                                onSubmitEditing={() => { }}
                                value={this.state.formatedString}
                                underlineColorAndroid='rgba(93,93,93,1)'
                                placeholderTextColor="rgba(16,16,16,0.7)"
                                noIcon={true}
                        />
                        <WhiteButton
                            title="Update"
                        />

                    </View>

                </View>

                <ModalTextEdit
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(false) }}
                    value = {this.state.newfullname}
                    placeholder="Full Name"
                    onChangeText={
                        (newfullname) => {
                            this.setState({ newfullname });
                        }
                    }
                    onSubmitEditing={
                        (event) => {
                            this.setState({ fullName: this.state.newfullname });
                            this.setModalVisible(false);
                        }
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    lowerBlockSe: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    lowerBlockHeading: {
        backgroundColor: "rgba(232,78,64,0.8)",
        alignSelf: 'center',
        height: 30,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    lowerBlockHeadingText: {
        color: "#FFF",
        alignSelf: 'center',
        fontSize: 13
    },
    containerBlock: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconContainer: {
        position: "absolute",
        top: 250,
        right: 20,
        zIndex: 1
    },
    icon: {
        opacity: 0.9,
    },
    input: {
        height: 50,
        width: 300,
        marginBottom: 20,
        color: "#000",
        paddingHorizontal: 10,
        fontSize: 16
    }
});