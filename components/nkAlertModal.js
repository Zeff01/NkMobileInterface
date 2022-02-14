import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Image, View } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../constants/Colors';
// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkButton from './nkButton';


const NkAlertModal = props => {

    const [modalVisible, setModalVisible] = useState(false);
    const NwClass = useStyles();

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
                        <Div style={{ alignSelf: 'flex-end' }}>
                            <Image style={NwClass.alertIcon2} source={require('../assets/demoIcons/Modal-icon/info-green-circle-png-type-60x60.png')} />
                        </Div>
                        <Div>
                            <Image style={NwClass.alertIcon} source={require('../assets/demoIcons/Modal-icon/info-green-png-type-60x60.png')} />
                            {/* <Ionicons name='newspaper-outline' size={70} color='#39b364' /> */}
                        </Div>

                        <Div >
                            <Text style={NwClass.mdl_msg_AlertTitle}>
                                Cannot be Saved!
                            </Text>
                        </Div>
                        <Div >
                            <Text style={NwClass.mdl_error_txtmsg}>
                                Please fill in the following required fields
                            </Text>
                            <Div style={[NwClass.hr, NwClass.hrAlert]}></Div>
                        </Div>



                        <Div style={[NwClass.mdl_btn]}>

                            <NkButton
                                style={NwClass.btn_alert_yes}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='Okay'

                                titleStyle={NwClass.btn_alert_yesText}
                            />

                            <NkButton
                                style={NwClass.btn_alert_no}
                                customClick={() => setModalVisible(!modalVisible)}
                                buttonTitle
                                title='Cancel'
                                titleStyle={NwClass.btn_alert_noText}
                            />
                        </Div>
                    </Div>
                </Div>
            </Modal >
            <NkButton
                style={NwClass.btn_default}
                customClick={() => setModalVisible(true)}
                buttonTitle
                title='Show Alert Box v2'
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

export default NkAlertModal
