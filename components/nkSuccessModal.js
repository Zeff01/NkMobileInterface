import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Image, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../constants/Colors';
// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkButton from './nkButton';


const NkSuccessModal = props => {
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
                    <Div style={NwClass.mdl_msg_wrap}>
                        <Div>
                            <Image style={NwClass.successIcon} source={require('../assets/demoIcons/Modal-icon/logout-violet-png-type-60x60.png')} />
                        </Div>
                        {/* <Div >
                            <Text style={NwClass.mdl_msg_title}>
                                Error Message Design (Title Optional)
                            </Text>
                        </Div> */}
                        <Div style={NwClass.margin_y_10}>
                            <Text style={NwClass.mdl_error_txtmsg}>
                                Your data has been saved successfully!
                            </Text>
                            <Text style={NwClass.mdl_error_txtmsg}>
                                (see details)
                            </Text>
                        </Div>

                        <Div style={NwClass.mdl_btn}>
                            <NkButton
                                style={NwClass.btn_save_yes}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='Yes'
                                titleStyle={NwClass.btn_save_yesText}
                            />

                            <NkButton
                                style={NwClass.btn_save_no}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='No'
                                titleStyle={NwClass.btn_save_noText}
                            />
                        </Div>
                    </Div>
                </Div>
            </Modal >
            <NkButton
                style={NwClass.btn_default}
                customClick={() => setModalVisible(true)}
                buttonTitle
                title='Show Success Pop Up Modal'
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

export default NkSuccessModal
