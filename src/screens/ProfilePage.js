import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { commonStyle, containerStyles } from '../common/Styles';
import ProfileViewItem from '../components/profile/ProfileViewItem';
import ProfileEditOpacity from '../components/profile/ProfileEditOpacity';

export default class ProfilePage extends Component {
    render() {
        return (
            <View style={[styles.container, commonStyle.inpageBackground]}>
                <View style={styles.profileImageSe}>
                    <Image
                        style={styles.profileImage}
                        resizeMode="contain"
                        source={require('../static/images/actor3.jpg')}
                    />
                    <View style={styles.imageFooter}>
                        <Text style={styles.headline}>Titus Joyson</Text>
                    </View>
                </View>
                <View style={styles.lowerBlockSe}>
                    <View style={styles.lowerBlockHeading}>
                        <Text style={styles.lowerBlockHeadingText}>@titusjoyson</Text>
                    </View>
                    <View style={styles.containerBlock}>
                        <View style={styles.containerBlockItem}>
                            <ProfileViewItem
                                value="Living in Chennai, Tamilnadu, India"
                                iconName="map-marker"
                            />
                            <ProfileViewItem
                                value="Born in June 10, 1994"
                                iconName="birthday-cake"
                            />
                            <ProfileViewItem
                                value="tj.joyson@askpundit.com"
                                iconName="envelope"
                            />
                        </View>
                        <View style={{justifyContent: 'flex-end',}}>
                                <ProfileEditOpacity
                                    value="Edit Profile"
                                    iconName="pencil"
                                />
                            </View>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    profileImageSe: {
        flex: 4.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerBlockSe: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profileImage: {
        flex: 1,
    },
    imageFooter: {
        backgroundColor: "rgba(232,78,64,0.8)",
        alignSelf: 'center',
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    headline: {
        color: "#FFF",
        alignSelf: 'center',
        fontSize: 20
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
    },
    containerBlockItem: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 40,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#bbbbbb"
    }
});