import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>Created by: Jzeff Kendrew F. Somera | </Text>
            <Text style={styles.footerText}>10/26/2021 | </Text>
            {/* <Text style={styles.footerText}>Modified by: Jzeff Kendrew F. Somera | </Text>
            <Text style={styles.footerText}>11/4/2021 | </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 28,
        flexDirection: 'row',
        padding: 0,
        backgroundColor: '#ededed',
        marginTop: 10,
       
    },
    footerText:{
        fontSize: 19,
        fontWeight: 'bold',
        marginHorizontal: 10
    }
});

export default Footer
