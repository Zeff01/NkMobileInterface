import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import { back } from 'react-native/Libraries/Animated/Easing';

import Colors from '../constants/Colors';
// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkButton from './nkButton';


const nkCompanyModal = props => {
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
                            <Text style={styles.titleText}>Select Company Type</Text>
                        </Div>
                        <Div style={styles.selectBoxContainer}>
                            <Div style={styles.box}>
                                <Image source={require('../assets/HomepageIcons/icon-nw_v2_company_colored_22x22_72px.png')}
                                    style={styles.boxImage}
                                />
                                <Div style={styles.textContainer}>
                                    <Text style={styles.boxText}>Forecasting and Planning Technologies Inc.</Text>
                                    <Text style={styles.boxTitle}>FPTI</Text>
                                </Div>
                            </Div>
                            <Div style={styles.box}>
                                <Image source={require('../assets/HomepageIcons/icon-nw_v2_company_colored_22x22_72px.png')}
                                    style={styles.boxImage}
                                />
                                <Div style={styles.textContainer}>
                                    <Text style={styles.boxText}>Agricultural Produce Market Committee</Text>
                                    <Text style={styles.boxTitle}>APMC</Text>
                                </Div>
                            </Div>
                            <Div style={styles.box}>
                                <Image source={require('../assets/HomepageIcons/icon-nw_v2_company_colored_22x22_72px.png')}
                                    style={styles.boxImage}
                                />
                                <Div style={styles.textContainer}>
                                    <Text style={styles.boxText}>Megaworld Corporation</Text>
                                    <Text style={styles.boxTitle}>MEGAWORLD</Text>
                                </Div>

                            </Div>

                        </Div>



                        <Div style={styles.buttonContainer}>

                            <NkButton
                                style={styles.button}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='Back'

                                titleStyle={NwClass.btn_alert_yesText}
                            />

                            <NkButton
                                style={styles.button}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='Change Company'
                                titleStyle={NwClass.btn_alert_yesText}
                            />
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
                    source={require('../assets//HomepageIcons/icon-nw_v2_company_colored_22x22_72px.png')}
                    style={[styles.userIcon, styles.companyIcon]}
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
    },
    selectBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
    titleText: {
        color: '#394651',
        fontSize: 23,
        fontWeight: '700',

    },
    box: {
        padding: 10,
        margin: 5,
        width: '33.33%',
        height: 200,
    },
    boxImage: {
        width: 40,
        height: 40,
        alignSelf: 'center'
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
    companyIcon: {
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

export default nkCompanyModal
