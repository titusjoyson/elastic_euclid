import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Modal, TouchableHighlight, Animated, FlatList, Alert,
} from 'react-native';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal';

import { commonStyle, containerStyles } from '../common/Styles';
import InputBox from '../components/InputBox';

export default class SelectLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            searchText: "",
            locationText: "",
            renderAddress: []
        }
    }
    componentDidMount() {

    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _fetchLocation(searchText) {
        const address = searchText;
        const key = "AIzaSyBAC6TepIcAKS79qewPh2rXpQ_Y-TJRdm8";
        fetch('https://maps.googleapis.com/maps/api/geocode/json?key=' + key + '&address=' + address, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this._genrateSearchList(responseJson.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _genrateSearchList(locationList) {
        const renderAddress = [];
        const listItems = locationList.map((location) => {
            console.log(location);
            renderAddress.push({ formatedString: location.formatted_address });
        });
        console.log(renderAddress);
        this.setState({ renderAddress: renderAddress });
    }

    _renderSearchList() {
        return (
            <View style={[styles.listContainer]}>
                <FlatList
                    data={this.state.renderAddress}
                    renderItem={
                        ({ item }) =>
                            <View style={[styles.lista]}>
                                <Text style={[styles.listaText]}>{item.formatedString}</Text>
                            </View>}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={[]}>
                <View onTouchStart={ (event) => { this.setModalVisible(true) } }>
                    <InputBox
                        placeholder="Enter your location"
                        onChangeText={(text) => {this.setState({locationText: this.state.locationText}) }}
                        value={this.state.locationText}
                    />
                </View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(false) }}
                    style={[]}
                >
                    <View style={[styles.viewContainer, commonStyle.background]}>
                        <View style={[styles.inputWrapper]}>
                            <InputBox
                                placeholder="Enter your location"
                                onChangeText={
                                    (searchText) => {
                                        this.setState({ searchText });
                                        this._fetchLocation(searchText)
                                    }
                                }
                                autoFocus={false}
                                value={this.state.searchText}
                                keyboardType='default'
                            />
                        </View>
                        {this._renderSearchList()}
                    </View>
                </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    viewContainer: {
        padding: 20,
        flex: 1,
        alignSelf: "stretch"
    },
    lista: {
        marginHorizontal: 4,
        paddingVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        minHeight: 30,
        width: 200,
        borderBottomWidth: 2,
        borderBottomColor: "red"
    },
    listaText: {
        color: "white",
        paddingHorizontal: 5,
        textShadowColor: "red",
        fontSize: 15
    },
    listContainer: {

    },
    inputWrapper: {
        alignItems: "center"
    }
});