import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';


import NkSearchBar from './nkSearchBar';
import Colors from '../constants/Colors';

const NkPicker = props => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (

        <View style={[styles.picker, props.style]}>
            <Picker
                selectedValue={selectedLanguage}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)

                }>
         
                <Picker.Item label="Picker/ DropDown" color='black' enabled={false} style={props.textStyle} />
                <Picker.Item label="Item1" value="i1" color='red' style={props.ItemStyle} />
                <Picker.Item label="Item2" value="i2" color='green' style={props.ItemStyle} />
                <Picker.Item label="Item3" value="i3" color='violet' style={props.ItemStyle} />
            </Picker>
        </View>

    )
}

const styles = StyleSheet.create({

    picker: {
        width: '100%',
        borderColor: Colors.black,
        borderWidth: .9,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,

    }
});

export default NkPicker
