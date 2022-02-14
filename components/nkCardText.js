import React from 'react'
import { View, Text, StyleSheet, TextInput, } from 'react-native'

import Colors from '../constants/Colors';


import Div from './div';
// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
const NkCardtext = props => {
    const NwClass = useStyles();
    return (
        <Div style={[NwClass.card, props.style]} >
            <Text style={NwClass.card_title}>{props.title}</Text>

            <Text style={NwClass.card_title}>{props.text}</Text>

        </Div>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: .7,
        borderColor: 'black',
        margin: 5,
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
    }
});


export default NkCardtext
