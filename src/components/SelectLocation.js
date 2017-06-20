import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Modal, TouchableOpacity, Animated, FlatList, Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { commonStyle, containerStyles } from '../common/Styles';
import InputBox from '../components/InputBox';

export default class SelectLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            searchText: "",
            renderAddress: [],

            country: "",
            state: "",
            city: "",
            location_lat: "",
            place_id: ""
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
        count = 0;
        const listItems = locationList.map((location) => {

            const location_add = location.address_components;
            const location_geo = location.geometry.location;
            const object_skeli = {
                "key": 0,
                "country": "", "state": "",
                "city": "", "formatedString": "",
                "location_geo": "", "place_id": ""
            };

            const listGeo = location_add.map((location_item) => {
                if (location_item.types.includes("country")) {
                    object_skeli.country = location_item.long_name;
                } else if (location_item.types.includes("administrative_area_level_1")) {
                    object_skeli.state = location_item.long_name;
                } else if (location_item.types.includes("administrative_area_level_2")) {
                    object_skeli.city = location_item.long_name;
                }
            });

            object_skeli.formatedString = location.formatted_address;
            object_skeli.location_geo = location_geo;
            object_skeli.place_id = location.place_id;
            count = count + 1;
            object_skeli.key = count;
            renderAddress.push(object_skeli);
        });
        this.setState({ renderAddress: renderAddress });
    }

    _renderSearchList() {
        return (
            <View style={[styles.mainList]}>
                <FlatList
                    data={this.state.renderAddress}
                    renderItem={
                        ({ item }) =>
                            <TouchableOpacity
                                onPress={(event) => {
                                    this.setState({
                                        formatedString: item.formatedString,
                                        city: item.city,
                                        state: item.state,
                                        country: item.country,
                                        place_id: item.place_id,
                                        location_geo: item.location_geo
                                    });
                                    this.setModalVisible(false);
                                }}
                            >
                                <View key={item.key} style={[styles.lista]}>
                                    <Text style={[styles.listaText]}>{item.formatedString}</Text>
                                </View>
                            </TouchableOpacity>}
                />
            </View>
        )
    }

    render() {
        return (

            <View >
                <TouchableOpacity onPress={(event) => { this.setModalVisible(true) }}>
                    <View style={styles.iconInputWrapper}>
                        <InputBox
                            placeholder="Enter your location"
                            onChangeText={(text) => { this.setState({ formatedString: this.state.formatedString }) }}
                            value={this.state.formatedString}
                            style={styles.input}
                            inputRef={(enterLocation) => this.enterLocation = enterLocation}
                            editable={false}
                        />
                        <Icon style={styles.icon} name="map-marker" size={20} color="#FFF" />
                    </View>
                </TouchableOpacity>

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
                                autoFocus={true}
                                value={this.state.searchText}
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
        borderBottomWidth: 2,
        borderBottomColor: "red",
    },
    listaText: {
        color: "white",
        paddingHorizontal: 5,
        textShadowColor: "red",
        fontSize: 15
    },
    inputWrapper: {
        alignItems: "center"
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
        paddingHorizontal: 18,
        marginBottom: 8
    },
    mainList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
});