import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Image, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../constants/Colors';
import { NwClass } from '../constants/NwClass';
import Div from './div';
import NkButton from './nkButton';



const NkErrorModal = props => {

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
                    <Div style={NwClass.mdl_msg_wrap}>
                        <Div>
                            <Image style={NwClass.errorIcon} source={require('../assets/demoIcons/Modal-icon/error-red-png-type-60x60.png')} />
                        </Div>
                        <Div >
                            <Text style={NwClass.mdl_msg_title}>
                                Error Message Design (Title Optional)
                            </Text>
                        </Div>
                        <Div >
                            <Text style={NwClass.mdl_error_txtmsg}>
                                Process/Action encountered issues. Please try again later.
                                (see details)
                            </Text>
                        </Div>

                        <Div style={NwClass.mdl_btn}>
                            <NkButton
                                style={NwClass.btn_error_yes}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='Yes'

                                titleStyle={NwClass.btn_error_yesText}
                            />

                            <NkButton
                                style={NwClass.btn_error_no}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='No'
                                titleStyle={NwClass.btn_error_noText}
                            />
                        </Div>
                    </Div>
                </Div>
            </Modal >
            <NkButton
                style={NwClass.btn_default}
                customClick={() => setModalVisible(true)}
                buttonTitle
                title='Show Error Pop Up Modal'
                titleStyle={styles.textStyle}
            />

        </Div >
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    button: {
        borderRadius: 10,
        padding: 0,
        elevation: 2,
        backgroundColor: "#3885d2",
        height: 50,
        width: 200,
        justifyContent: 'center',
        marginTop: 20
    },
    textStyle: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
});

export default NkErrorModal
