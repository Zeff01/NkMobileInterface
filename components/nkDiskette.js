import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

import NkCheckbox from './nkCheckbox';

const NkDiskette = props => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    source={props.imageUri}
                    resizeMode='cover'
                    style={{ width: 50, height: 50 }}
                />
            </View>
            <View style={styles.itemContainer}>
                <View>
                    <Text style={styles.title}>Diskette Icon</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>
                </View>
                <View style={styles.radioContainer}>
                    <NkCheckbox />
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: .8,
        borderColor: 'black',
        flexDirection: 'row',
        borderRadius: 20,
        padding: 10,

    },
    image: {
        justifyContent: 'center'

    },
    itemContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 10,
        justifyContent: 'space-between',
        width: '75%',

    },
    radioContainer: {
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
    },
    description: {
        fontSize: 15,
    }
});

export default NkDiskette
