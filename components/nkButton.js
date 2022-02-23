import React from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';



const NkButton = props => {

    const dimheight = Dimensions.get('window').height
    const dimwidth = Dimensions.get('window').width


    if (dimwidth <= 900) {
        return (
            // <LinearGradient
            //     colors={['#4c669f', '#3b5998', '#192f6a']}

            // >
            <TouchableOpacity
                style={[styles.button, props.style]}
                onPress={props.customClick}
                disabled={props.disabled}
            >

                {props.buttonTitle && (
                    <Text style={[styles.title, props.titleStyle]}>
                        {props.title}
                    </Text>
                )}

                {props.iconButton && (
                    <Ionicons name='arrow-forward' size={25} />
                )}

            </TouchableOpacity>
            // </LinearGradient>

        )
    }
    return (

        <TouchableOpacity
            style={[styles.button, props.style]}
            onPress={props.customClick}
            disabled={props.disabled}
        >
            <Text style={[styles.title, props.titleStyle]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    title: {
        fontFamily: 'AbadiMTStd',
        color: 'white'
    }
});

export default NkButton
