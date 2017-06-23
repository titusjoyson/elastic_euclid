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

import { commonStyle, containerStyles } from '../common/Styles';
import InputBox from '../components/InputBox';

export default class ModalTextEdit extends Component {

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                {...this.props}
            >
                <View style={[styles.viewContainer, commonStyle.background]}>
                    <View style={[styles.inputWrapper]}>
                        <InputBox
                            onChangeText={this.props.onChangeText}
                            autoFocus={true}
                            value={this.props.value}
                            placeholder={this.props.placeholder}
                            onSubmitEditing={this.props.onSubmitEditing}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        padding: 20,
        flex: 1,
        alignSelf: "stretch"
    },
    inputWrapper: {
        alignItems: "center"
    },
});