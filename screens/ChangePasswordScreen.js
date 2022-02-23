import React from 'react'
import Div from '../components/div';
import { useStyles } from '../functions/Orientation';
import { StyleSheet, Text, Image, Button, TouchableOpacity } from "react-native";
import NkTextInput from '../components/nkTextInput';
import NkButton from '../components/nkButton';

const ChangePasswordScreen = props => {
    const NwClass = useStyles();




    return (
        <Div style={[NwClass.row, NwClass.row_parent]}>
            <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent]}>
                <Div style={NwClass.row}>
                    <Div style={styles.title}>
                        <Div style={styles.titleSettings}>
                            <Image
                                source={require('../assets//HomepageIcons/icon-nw_v2_settings_colored_22x22_72px.png')}
                                style={styles.userIcon}
                            />
                            <Text style={styles.titleText}>Settings</Text>
                        </Div>
                    </Div>
                    <Div style={styles.borderDivider}></Div>
                    <Div style={styles.titleContainer}
                    >
                        <Image
                            source={require('../assets//HomepageIcons/icon-nw_v2_key_colored_22x22_72px.png')}
                            style={styles.contentIcon}
                        />
                        <Text style={styles.contentTitle}>Change Password</Text>
                    </Div>

                </Div>
            </Div>

            <Div style={[NwClass.col, NwClass.col_7, NwClass.col_parent]}>

                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_5]}>
                        <Text style={styles.inputLabel}>Username</Text>
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_7]}>

                        <NkTextInput
                            style={NwClass.txtbox}
                        />
                    </Div>
                </Div>
                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_5]}>
                        <Text style={styles.inputLabel}>Description</Text>
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_7]}>
                        <NkTextInput
                            style={[NwClass.txtbox, styles.txtbox]}
                        />
                    </Div>
                </Div>
                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_5]}>
                        <Text style={styles.inputLabel}>Password</Text>
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_7]}>
                        <NkTextInput
                            style={[NwClass.txtbox, styles.txtbox]}
                        />
                    </Div>
                </Div>
                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_5]}>
                        <Text style={styles.inputLabel}>New Password</Text>
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_7]}>
                        <NkTextInput
                            style={[NwClass.txtbox, styles.txtbox]}
                        />
                    </Div>
                </Div>
                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_5]}>
                        <Text style={styles.inputLabel}>Confirm Password</Text>
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_7]}>
                        <NkTextInput
                            style={[NwClass.txtbox, styles.txtbox]}
                        />
                    </Div>
                </Div>
                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_5]}>

                    </Div>
                    <Div style={[NwClass.col, NwClass.col_7]}>
                        <NkButton
                            style={NwClass.btn_default}
                            titleStyle={styles.UpdatepasswordStyle}
                            buttonTitle
                            title='Update Password'
                        />
                    </Div>
                </Div>
            </Div>
        </Div>



    )
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        width: '100%'
    },
    titleSettings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    titleText: {
        color: '#394651',
        fontSize: 23,
        fontWeight: '700',
    },
    userIcon: {
        marginHorizontal: 10,
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    borderDivider: {
        borderBottomWidth: 4,
        borderColor: 'rgb(0 0 0)',
        marginVertical: 20,
        opacity: .3,
        borderRadius: 20,
        width: '100%'
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        marginLeft: 30,
        marginBottom: 20,
    },
    contentIcon: {
        width: 40,
        height: 40,
        marginRight: 15
    },
    contentTitle: {
        color: '#657688',
        fontWeight: '900',
        fontSize: 25,
    },
    txtbox: {
        height: 40,
        borderWidth: 1
    },
    inputLabel: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
    },
    UpdatepasswordStyle: {
        fontSize: 22,
        color: 'white',
        fontWeight: '600'
    },
});

export default ChangePasswordScreen
