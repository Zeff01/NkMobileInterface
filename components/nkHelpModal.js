import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import { back } from 'react-native/Libraries/Animated/Easing';

import Colors from '../constants/Colors';
// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkButton from './nkButton';


const NkAlertModal = props => {
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
                    <Div style={styles.wrap}>
                        <Div style={styles.title}>
                            <Div style={styles.titleiconContainer}>
                                <Text style={styles.titleText}>Welcome to NOAH Buisness Application</Text>
                                <NkButton
                                    style={styles.titleIcon}
                                    title='X'
                                    titleStyle={styles.titleIconStyle}
                                    customClick={() => setModalVisible(!modalVisible)}
                                />
                            </Div>
                            <Text style={styles.subTitleText}>Here's a few quick ways to help you.</Text>

                        </Div>
                        <Div style={styles.selectBoxContainer}>
                            <Div style={styles.box}>
                                <Image source={require('../assets/HomepageIcons/icon-nw_v2_company_colored_22x22_72px.png')}
                                    style={styles.boxImage}
                                />
                                <Div style={styles.textContainer}>
                                    <Text style={styles.boxTitle}>Assistant.</Text>
                                    <Text style={styles.boxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                </Div>

                            </Div>
                            <Div style={styles.box}>
                                <Image source={require('../assets/HomepageIcons/icon-nw_v2_company_colored_22x22_72px.png')}
                                    style={styles.boxImage}
                                />
                                <Div style={styles.textContainer}>
                                    <Text style={styles.boxTitle}>Noah Buisness Application</Text>
                                    <Text style={styles.boxText}>8.6.1.33 About</Text>
                                </Div>
                            </Div>
                            <Div style={styles.borderDivider2}></Div>

                            <Text style={styles.bottomTitle}>Powered By: FPTI</Text>
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
                onPress={() => setModalVisible(true)}
                style={[styles.userIconContainer, props.extraStyle]}
            >
                <Image
                    source={require('../assets//HomepageIcons/icon-nw_v2_help_colored_22x22_72px.png')}
                    style={[styles.userIcon, styles.helpIcon]}
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
        marginHorizontal: 10
    },
    wrap: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
        margin: 5,
        width: 600,

    },
    selectBoxContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%'

    },
    title: {

    },
    titleiconContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between'
    },
    titleIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        right: -50,
    },
    titleIconStyle: {
        color: 'black',
        fontSize: 25
    },
    titleText: {
        color: '#394651',
        fontSize: 25,
        fontWeight: '900',

    },
    subTitleText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 10
    },
    borderDivider: {
        borderBottomWidth: 4,
        borderColor: 'rgb(0 0 0)',
        marginVertical: 20,
        opacity: .3,
        borderRadius: 20,
    },
    borderDivider2: {
        borderBottomWidth: 4,
        borderColor: 'rgb(0 0 0)',
        marginVertical: 20,
        opacity: .3,
        borderRadius: 20,
        width: '100%'
    },
    box: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',

    },
    boxImage: {
        width: 80,
        height: 80,
        backgroundColor: '#28396f',
        borderRadius: 40,
    },
    textContainer: {
        marginLeft: 10,

    },
    boxText: {
        color: '#394651',
        fontSize: 18,
        fontWeight: '600',
    },
    boxTitle: {
        color: '#394651',
        fontWeight: '900',
        fontSize: 23,
        marginVertical: 0,
    },

    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#28396f',
        width: '25%',
        height: 40,
        borderRadius: 6,
        marginHorizontal: 10,
        marginTop: 10
    },
    textStyle: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    helpIcon: {

        width: 35,
        height: 35,
    },
    userIconContainer: {
        backgroundColor: '#ffe5bc',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userIcon: {
        marginHorizontal: 10,
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    bottomTitle: {
        color: '#4c5d72',
        fontWeight: '900',
        fontSize: 25,
        alignSelf: 'center'
    }
});


export default NkAlertModal
