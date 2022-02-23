import React from 'react'

import { StyleSheet, Text, Image, Button, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

import NkTextInput from '../components/nkTextInput';
import NkButton from '../components/nkButton';
import Div from '../components/div';
import { useStyles } from '../functions/Orientation';


const ChangeNumberScreen = props => {
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
                            source={require('../assets//HomepageIcons/icon-nw_v2_telephone_colored_22x22_72px.png')}
                            style={styles.contentIcon}
                        />
                        <Text style={styles.contentTitle}>Contact Numbers</Text>
                    </Div>

                </Div>
            </Div>

            <Div style={[NwClass.col, NwClass.col_7, NwClass.col_parent]}>

                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_6,]}>
                        <NkTextInput
                            style={NwClass.txtbox}
                        />
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_1,]}>
                        <Ionicons name='trash-outline' size={28} color='red' />
                    </Div>

                </Div>
                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_6,]}>
                        <NkTextInput
                            style={NwClass.txtbox}
                        />
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_1,]}>
                        <Ionicons name='trash-outline' size={28} color='red' />
                    </Div>

                </Div>
                <Div style={NwClass.row}>
                    <Div style={[NwClass.col, NwClass.col_6,]}>
                        <NkButton
                            style={NwClass.btn_default}
                            titleStyle={styles.UpdatepasswordStyle}
                            buttonTitle
                            title='Add more number'
                        />
                    </Div>
                    <Div style={[NwClass.col, NwClass.col_1,]}>

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
    contentContainer: {
        marginLeft: 30,
        width: '100%',
        marginBottom: 20
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
    textboxContainer: {
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    txtbox: {
        height: 40,
        borderWidth: 1,
    },
});

export default ChangeNumberScreen
