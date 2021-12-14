import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import NkButton from './nkButton';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NwClass } from '../constants/NwClass';

//landscape tablet, 992px and up
var tabletLandscape = 993;

//portrait tablet 769px - 992px
var tabletPortait = 899;

//landscape phone, 577px - 768px
var phoneLandscape = 768;

//portrait phones, less than 576
var phonePortrait = 576;

const dimheight = Dimensions.get('window').height
const dimwidth = Dimensions.get('window').width

// { console.log(dimheight) }
{ console.log(dimwidth) }

const Header = props => {
    return (
        <View style={styles.container}>
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <Ionicons name='newspaper-outline' size={25} color='rgb(37, 97, 156)' />
                        <Text style={styles.buttonText}>New</Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <Ionicons name='save-outline' size={25}  color='rgb(37, 97, 156)'/>
                        <Text style={styles.buttonText}>Save</Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <MaterialCommunityIcons name='update' size={25} color='rgb(37, 97, 156)' />
                        <Text style={styles.buttonText}>Update</Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <MaterialCommunityIcons name='delete-alert-outline' size={25}  color='rgb(37, 97, 156)'/>
                        <Text style={styles.buttonText}>Delete</Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <Ionicons name='refresh' size={25} color='rgb(37, 97, 156)' />
                        <Text style={styles.buttonText}>Refresh</Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <Foundation name='page-search' size={25} color='rgb(37, 97, 156)' />
                        <Text style={styles.buttonText}>Inquire</Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <MaterialCommunityIcons name='account-arrow-right-outline' size={25} color='rgb(37, 97, 156)'/>
                        <Text style={styles.buttonText}>Process</Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <MaterialCommunityIcons name='application-export' size={25} color='rgb(37, 97, 156)' />
                        <Text style={styles.buttonText}>Export </Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <MaterialCommunityIcons name='application-import' size={25}  color='rgb(37, 97, 156)'/>
                        <Text style={styles.buttonText}>Import </Text>
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={NwClass.btn_title_with_icon}>
                        <Ionicons name='print-outline' size={25} color='rgb(37, 97, 156)'/>
                        <Text style={styles.buttonText}>Print</Text>
                    </View>
                }
                style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        height: 20,
       
    },
    buttonContainer: {
    
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 0,
        marginHorizontal: 10.5,
        //less spacing adjustment ^
    },
    buttonText: {
        fontSize: 15,
        color: '#333',
        fontFamily: 'AbadiMTStd',
        marginLeft: 5
    }
});

export default Header
