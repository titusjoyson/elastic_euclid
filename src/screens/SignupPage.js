import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, ScrollView, Alert
} from 'react-native';

import { commonStyle, containerStyles } from '../common/Styles';
import MainHeading from '../components/MainHeading';
import InputBox from '../components/InputBox';
import CommonButton from '../components/Button';
import BackToLogin from '../components/BackToLogin';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: "one",
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
         };
    }

    _swithTwo(){
        this.setState({
            show: "two"
        });
        this._renderInputFeals();
    }

    _alertVlaue(){
        Alert.alert(this.state.password)
    }

    _renderInputFeals(){
        if (this.state.show == "one"){
            return(
                <View>
                    <InputBox
                        placeholder="Full Name"
                        returnKeyType="next"
                        inputRef={(fullName) => this.fullName = fullName}
                        onSubmitEditing={() => this.emailInput.focus()}
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                    />
                    <InputBox
                        placeholder="Email"
                        returnKeyType="next"
                        secureTextEntry={true}
                        keyboardType='email-address'
                        inputRef={(emailInput) => this.emailInput = emailInput}
                        onSubmitEditing={() => {}}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                    />
                    <CommonButton
                        title="Next"
                        onPress={()=>{ this._swithTwo(); }}
                    />
                </View>
            )
        }else if(this.state.show == "two"){
            return(
                <View>
                    <InputBox
                        placeholder="Password"
                        returnKeyType="next"
                        inputRef={(passwordInput) => this.passwordInput = passwordInput}
                        onSubmitEditing={() => this.confirmPasswordInput.focus()}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                    />
                    <InputBox
                        placeholder="Confirm Password"
                        returnKeyType="go"
                        inputRef={(confirmPasswordInput) => this.confirmPasswordInput = confirmPasswordInput}
                        onSubmitEditing={(event) => {}}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({confirmPassword: text})}
                        value={this.state.confirmPassword}
                    />
                    <CommonButton
                        title="Launch It"
                        onPress={()=>{ this._alertVlaue(); }}
                    />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={[styles.container, commonStyle.background]}>
                <MainHeading />
                <View style={[styles.formContainer]}>
                    {this._renderInputFeals()}
                    <BackToLogin />
                </View>
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
