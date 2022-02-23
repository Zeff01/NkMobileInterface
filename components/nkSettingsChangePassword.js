import React from 'react'
import Div from './div'
import { useStyles } from '../functions/Orientation';
import { Alert, Modal, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import NkTextInput from './nkTextInput'
import NkButton from './nkButton';

function NkSettingsChangePassword() {
    const NwClass = useStyles();
    return (
        <Div>
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
    )
}

export default NkSettingsChangePassword
