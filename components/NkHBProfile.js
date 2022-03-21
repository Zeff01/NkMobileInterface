import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';

import { useStyles } from '../functions/Orientation';

import Div from './div';
import NkButton from './nkButton';
import NkSettingsModal from './nkSettingsModal';
import NkCompanyModal from './nkCompanyModal';
import NkHelpModal from './nkHelpModal'

const NkHBProfile = props => {
    const NwClass = useStyles();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Div >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity style={styles.centeredView}
                    onPress={() => setModalVisible(false)}
                >
                    {/* <ScrollView
                    directionalLockEnabled={true}

                    style={{ backgroundColor: 'red' }}
                > */}
                    <TouchableWithoutFeedback>
                        <Div style={styles.wrap}>

                            <Div style={[NwClass.col_12, styles.titleContainer]}>
                                <ImageBackground
                                    source={require('../assets/HomepageIcons/vector_day_320x100x300px.png')}
                                    style={styles.headerBanner}
                                />
                            </Div>
                            <Div style={[NwClass.col_12,]}>
                                <Div style={[NwClass.row, NwClass.row_parent]}>
                                    <Div style={[NwClass.col_12, NwClass.col_parent]}>
                                        <Div style={styles.menuUserInfo}>
                                            <Div style={styles.menuUserName}>
                                                <Text style={styles.menuUserNameText}>ANGELOCARLOGONZALES3</Text>
                                            </Div>
                                            <Div style={styles.menuUserType}>
                                                <Text style={styles.menuUserTypeText}>Administrator</Text>
                                            </Div>
                                        </Div>
                                        <Div style={styles.modalContainerCenter}>
                                            <Div style={styles.modalContainer}>
                                                <NkSettingsModal
                                                    extraStyle={{ backgroundColor: 'transparent' }}
                                                />
                                                <NkCompanyModal
                                                    extraStyle={{ backgroundColor: 'transparent' }}
                                                />
                                                <NkHelpModal
                                                    extraStyle={{ backgroundColor: 'transparent' }}
                                                />
                                            </Div>
                                        </Div>
                                        <Div style={styles.menuUserSubInfo}>
                                            <Div style={styles.menuUserSubInfo1}>
                                                <Text style={styles.menuUserSubInfoText}>Company</Text>
                                                <Text style={styles.menuUserSubInfoText2}>FPTI</Text>
                                            </Div>
                                            <Div style={styles.menuUserSubInfo1}>
                                                <Text style={styles.menuUserSubInfoText}>Log Time</Text>
                                                <Text style={styles.menuUserSubInfoText2}>8/26/2020 • 08:00 AM</Text>
                                            </Div>
                                        </Div>


                                        <Div style={styles.menuNotifViewAllBtn}>
                                            <TouchableOpacity
                                                style={styles.logOutContainer}
                                            >
                                                <Image
                                                    source={require('../assets/HomepageIcons/icon-nw_v2_logout_colored_22x22_72px.png')}
                                                    style={styles.logoutIcon}
                                                />
                                                <Text style={styles.logoutText}>
                                                    Log out</Text>
                                            </TouchableOpacity>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>

                        </Div>
                    </TouchableWithoutFeedback>
                    {/* </ScrollView> */}
                </TouchableOpacity>
            </Modal >

            <View>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}

                >
                    <Image
                        source={require('../assets/HomepageIcons/user-22x22p-design-white.png')}
                        style={styles.notificationIcon}

                    />
                </TouchableOpacity>
            </View>
        </Div>

    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    wrap: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 12,
        padding: 10,
        paddingBottom: 0,
        paddingTop: 0,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
        width: 540,
        position: 'absolute',
        top: 55,
        right: -5,

    },
    notificationIcon: {
        width: 25,
        height: 25,

    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#657688',

    },
    headerBanner: {
        width: '100%',
        height: 150,

    },
    menuUserInfo: {
        padding: 10,
    },
    menuUserNameText: {
        color: '#333',
        fontWeight: '700',
        fontSize: 30,
    },
    menuUserTypeText: {
        color: '#657688',
        fontWeight: '700',
        fontSize: 20
    },
    modalContainerCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flexDirection: 'row',
        width: '30%',
        marginVertical: 20,
    },
    menuUserSubInfo: {
        borderBottomWidth: 1,
        borderBottomColor: '#657688',
        padding: 10,
    },
    menuUserSubInfo1: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    menuUserSubInfoText: {
        color: '#657688',
        fontSize: 20,
        fontWeight: '600'
    },
    menuUserSubInfoText2: {
        color: '#657688',
        fontSize: 20,
        fontWeight: '800'
    },
    logOutContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    logoutIcon: {
        width: 30,
        height: 30,
        marginVertical: 5,
        marginRight: 10
    },
    logoutText: {
        color: '#657688',
        fontSize: 22,
        fontWeight: '700',
    },
});

export default NkHBProfile
