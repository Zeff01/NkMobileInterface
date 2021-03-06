
import React from 'react'
import { View, StyleSheet, TextInput, } from 'react-native'


import Colors from '../constants/Colors';

const NkTextInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                underlineColorAndroid="transparent"
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={[styles.input, props.style]}
                blurOnSubmit={false}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                focus={props.focus}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {

    },
    input: {
        borderColor: Colors.black,
        borderWidth: .9,
        backgroundColor: Colors.white,
        fontSize: 18,
        elevation: 0.5,
        borderRadius: 3,
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
});

export default NkTextInput
