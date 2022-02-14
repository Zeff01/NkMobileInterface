import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../constants/Colors';
// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkButton from './nkButton';
import NkTextInput from './nkTextInput'

import NkSettingsEmailModal from './nkSettingsEmailModal'
import NkSetttingsContacts from './nkSettingsContacts'


const NkSettingsModal = props => {
    const NwClass = useStyles();

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Div style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >

                <Div style={styles.centeredView}>
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={styles.wrap}>
                                <Div style={styles.title}>
                                    <Div style={styles.titleSettings}>
                                        <Image
                                            source={require('../assets//HomepageIcons/icon-nw_v2_settings_colored_22x22_72px.png')}
                                            style={[styles.userIcon, styles.settingsIcon]}
                                        />
                                        <Text style={styles.titleText}>Settings</Text>
                                    </Div>
                                    <NkButton
                                        style={styles.titleIcon}
                                        title='X'
                                        titleStyle={styles.titleIconStyle}
                                        customClick={() => setModalVisible(!modalVisible)}
                                    />
                                </Div>
                                <Div style={styles.borderDivider}></Div>

                                <Div style={styles.contentContainer}>
                                    <Div style={styles.iconContentContainer}>
                                        <TouchableOpacity style={styles.iconContainer}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >

                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.iconContainer}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <NkSettingsEmailModal />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconContainer}>
                                            <NkSetttingsContacts />
                                        </TouchableOpacity>

                                    </Div>
                                    <Div style={styles.selectBoxContainer}>
                                        <Text style={styles.contentTitle}>Change Password</Text>

                                        <Div style={[NwClass.row, NwClass.row_parent]}>
                                            <Div style={[NwClass.row,]}>
                                                <Div style={[NwClass.col, NwClass.col_4]}>
                                                    <Text style={styles.inputLabel}>Username</Text>
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_6]}>
                                                    <NkTextInput />
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_4]}>
                                                    <Text style={styles.inputLabel}>Description</Text>
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_6]}>
                                                    <NkTextInput />
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_4]}>
                                                    <Text style={styles.inputLabel}>Password</Text>
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_6]}>
                                                    <NkTextInput />
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_4]}>
                                                    <Text style={styles.inputLabel}>New Password</Text>
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_6]}>
                                                    <NkTextInput />
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_4]}>
                                                    <Text style={styles.inputLabel}>Confirm Password</Text>
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_6]}>
                                                    <NkTextInput />
                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_4]}>

                                                </Div>
                                                <Div style={[NwClass.col, NwClass.col_6]}>
                                                    <NkButton
                                                        style={NwClass.btn_default}
                                                        title='Update Password'
                                                        titleStyle={styles.UpdatepasswordStyle}
                                                        customClick={() => setModalVisible(!modalVisible)}
                                                    />
                                                </Div>

                                            </Div>
                                        </Div>

                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Modal >
            {/* <NkButton
                style={NwClass.btn_default}
                customClick={() => setModalVisible(true)}
                buttonTitle
                title='Show Alert Box v2'
                titleStyle={styles.textStyle}
            /> */}
            <TouchableOpacity
                onPress={() => setModalVisible(true)}>
                <Image
                    source={require('../assets//HomepageIcons/icon-nw_v2_settings_colored_22x22_72px.png')}
                    style={[styles.userIcon, styles.settingsIcon]}
                />
            </TouchableOpacity>

        </Div >

    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    wrap: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
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
        margin: 5,
        width: 800,
        height: 550
    },
    title: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        width: '100%'
    },
    titleSettings: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        color: '#394651',
        fontSize: 23,
        fontWeight: '700',

    },
    titleIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    titleIconStyle: {
        color: 'red',
        fontSize: 25
    },
    borderDivider: {
        borderBottomWidth: 4,
        borderColor: 'rgb(0 0 0)',
        marginVertical: 20,
        opacity: .3,
        borderRadius: 20,
        width: '100%'
    },
    contentContainer: {
        flexDirection: 'row',
        width: '100%'
    },
    iconContentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        margin: 10,
        marginHorizontal: 0,
        width: 80,
        height: 80,
        backgroundColor: 'blue',
    },
    icon: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    selectBoxContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    contentTitle: {
        color: '#657688',
        fontWeight: '900',
        fontSize: 25,
        marginLeft: 10,
        alignSelf: 'flex-start'
    },
    inputLabel: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
    },
    textContainer: {
        height: '80%',
        justifyContent: 'space-between',
    },
    boxText: {
        color: '#394651',
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 20,
        textAlign: 'center',
    },
    boxTitle: {
        color: '#394651',
        fontWeight: '900',
        fontSize: 18,
        marginVertical: 0,
        textAlign: 'center',
    },

    UpdatepasswordStyle: {
        fontSize: 22,
        color: 'white',
        fontWeight: '600'
    },
    textStyle: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    settingsIcon: {
        backgroundColor: '#ddd3ed',
        width: 40,
        height: 40,
    },
    userIcon: {
        marginHorizontal: 10,
        borderRadius: 50,
        width: 60,
        height: 60,
    },
});


export default NkSettingsModal
