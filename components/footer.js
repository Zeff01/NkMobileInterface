import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.footerTitle}>Created by: </Text>
            <Text style={styles.footerText}> Jzeff Kendrew F. Somera | 10/26/2021 | </Text>
            {/* <Text style={styles.footerText}>Modified by: Jzeff Kendrew F. Somera | </Text>
            <Text style={styles.footerText}>11/4/2021 | </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 35,
        flexDirection: 'row',
        padding: 0,
        marginTop: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#e8edf3'
       
    },
    footerTitle:{
        fontSize: 19,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: '#394651'
    },
    footerText:{
        fontSize: 19,
        marginHorizontal: 10,
        color: '#394651'
    }
});

export default Footer
