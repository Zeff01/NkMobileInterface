import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkButton from './nkButton';


const NkHBNotification = props => {
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
                                <Text>Icon here</Text>
                                <Text style={styles.title}>Notifications</Text>
                                <Image
                                    source={require('../assets/HomepageIcons/icon-nw_v2_settings_colored_22x22_72px.png')}
                                    style={styles.settingsIcon}
                                />
                            </Div>
                            <Div style={[NwClass.col_12,]}>
                                <Div style={[NwClass.row, NwClass.row_parent]}>
                                    <Div style={[NwClass.col_12, NwClass.col_parent]}>
                                        <Div style={styles.menuNotifInfo}>
                                            <Div style={styles.menuNotifProf}>
                                                <Text style={styles.menuNotifProfAbbr}>AO</Text>
                                            </Div>
                                            <Div style={styles.menuNotifSubInfo}>
                                                <Div style={styles.menuNotifsubPara}>
                                                    <Text>
                                                        <Text style={styles.menuNotifName}>Jzeff Kendrew F.Somera </Text>
                                                        <Text style={styles.menuNotifText}>Login details need to update</Text>
                                                    </Text>
                                                </Div>
                                                <Div >
                                                    <Text style={styles.menuNotifMin}>3mins ago</Text>
                                                </Div>
                                            </Div>
                                        </Div>
                                        <Div style={styles.menuNotifInfo}>
                                            <Div style={styles.menuNotifProf}>
                                                <Text style={styles.menuNotifProfAbbr}>AO</Text>
                                            </Div>
                                            <Div style={styles.menuNotifSubInfo}>
                                                <Div style={styles.menuNotifsubPara}>
                                                    <Text>
                                                        <Text style={styles.menuNotifName}>Jzeff Kendrew F.Somera </Text>
                                                        <Text style={styles.menuNotifText}>Login details need to update</Text>
                                                    </Text>
                                                </Div>
                                                <Div >
                                                    <Text style={styles.menuNotifMin}>3mins ago</Text>
                                                </Div>
                                            </Div>
                                        </Div>
                                        <Div style={styles.menuNotifInfo}>
                                            <Div style={styles.menuNotifProf}>
                                                <Text style={styles.menuNotifProfAbbr}>AO</Text>
                                            </Div>
                                            <Div style={styles.menuNotifSubInfo}>
                                                <Div style={styles.menuNotifsubPara}>
                                                    <Text>
                                                        <Text style={styles.menuNotifName}>Jzeff Kendrew F.Somera </Text>
                                                        <Text style={styles.menuNotifText}>Login details need to update</Text>
                                                    </Text>
                                                </Div>
                                                <Div >
                                                    <Text style={styles.menuNotifMin}>3mins ago</Text>
                                                </Div>
                                            </Div>
                                        </Div>
                                        <Div style={styles.menuNotifInfo}>
                                            <Div style={styles.menuNotifProf}>
                                                <Text style={styles.menuNotifProfAbbr}>AO</Text>
                                            </Div>
                                            <Div style={styles.menuNotifSubInfo}>
                                                <Div style={styles.menuNotifsubPara}>
                                                    <Text>
                                                        <Text style={styles.menuNotifName}>Jzeff Kendrew F.Somera </Text>
                                                        <Text style={styles.menuNotifText}>Login details need to update</Text>
                                                    </Text>
                                                </Div>
                                                <Div >
                                                    <Text style={styles.menuNotifMin}>3mins ago</Text>
                                                </Div>
                                            </Div>
                                        </Div>
                                        <Div style={styles.menuNotifViewAllBtn}>
                                            <TouchableOpacity>
                                                <Text
                                                    style={styles.menuNotifViewAllBtnText}
                                                >
                                                    See All Notifications</Text>
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
                        source={require('../assets/HomepageIcons/bell-icon-22x22p-design-white.png')}
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
        padding: 15,
        paddingBottom: 0,
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
        borderBottomWidth: 2,
        borderBottomColor: '#adfff1',
        padding: 10
    },
    title: {
        color: '#4c5d72',
        fontSize: 30,
        fontWeight: '500'
    },
    settingsIcon: {
        width: 40,
        height: 40
    },
    menuNotifInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomColor: '#e5fffb',
        borderBottomWidth: 1.5,
    },
    menuNotifProf: {
        backgroundColor: '#01d2af',
        borderRadius: 30,
        width: 50,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    menuNotifProfAbbr: {
        color: 'white',
        fontWeight: '800',
        fontSize: 20
    },
    menuNotifSubInfo: {
        justifyContent: 'space-between',
        padding: 20
    },
    menuNotifsubPara: {
    },
    menuNotifName: {
        color: '#4c5d72',
        fontWeight: '600',
        fontSize: 20
    },
    menuNotifText: {
        fontSize: 20
    },
    menuNotifMin: {
        color: '#01d2af',
        fontSize: 20,
        fontWeight: '500'
    },
    menuNotifViewAllBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderTopWidth: 3,
        borderTopColor: '#adfff1'
    },
    menuNotifViewAllBtnText: {
        color: '#01d2af',
        fontWeight: '600',
        fontSize: 23,
    }
});

export default NkHBNotification
