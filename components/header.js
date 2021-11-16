import React from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import NkButton from './nkButton';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = props => {
    return (
        <View style={styles.container}>


            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>New</Text>
                        <Ionicons name='newspaper-outline' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Save</Text>
                        <Ionicons name='save-outline' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Update</Text>
                        <MaterialCommunityIcons name='update' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Delete</Text>
                        <MaterialCommunityIcons name='delete-alert-outline' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Refresh</Text>
                        <Ionicons name='refresh' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Inquire</Text>
                        <Foundation name='page-search' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Process</Text>
                        <MaterialCommunityIcons name='account-arrow-right-outline' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Export </Text>
                        <MaterialCommunityIcons name='application-export' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Import </Text>
                        <MaterialCommunityIcons name='application-import' size={25} />
                    </View>
                }
                style={styles.button}
            />
            <NkButton
                buttonTitle
                title={
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Print</Text>
                        <Ionicons name='print-outline' size={25}  />
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
        alignSelf: 'flex-start',
        height: 40
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
     
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 0,
        marginHorizontal: 8.5        
    },
    buttonText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',

    }
});

export default Header
