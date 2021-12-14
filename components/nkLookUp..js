
import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../constants/Colors';

const NkLookUp = props=> {
    return (
        <View style={[styles.inputContainer, props.style]}>
            <TextInput 
              underlineColorAndroid="transparent"
              placeholder={props.placeholder}
              placeholderTextColor="#333"
              keyboardType={props.keyboardType}
              onChangeText={props.onChangeText}
              returnKeyType={props.returnKeyType}
              numberOfLines={props.numberOfLines}
              multiline={props.multiline}
              onSubmitEditing={props.onSubmitEditing}
              blurOnSubmit={false}
              value={props.value}
              style={styles.textInput}
            >
            </TextInput>        
            <TouchableOpacity onPress={props.customClick} style={[styles.lookUp, props.lookupStyle]}>
            <Ionicons name='search' size={27} color='white' />     
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        backgroundColor: Colors.white,
        fontSize: 18,
        borderRadius: 3,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        paddingHorizontal: 0,
        borderWidth: .6,
        borderColor: '#aaaaaa'
    },
    textInput:{  
        color: 'rgb(34, 34, 34)',
        paddingVertical: 3,
        paddingHorizontal: 4,
        borderColor: '#aaaaaa',
    },

    lookUp:{
        backgroundColor: '#2575c4',
        paddingHorizontal: 8,
        paddingVertical: 3,
    }
});

export default NkLookUp
