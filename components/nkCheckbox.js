import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import CheckBox from '@react-native-community/checkbox';


import Colors from '../constants/Colors';



const NkCheckbox = props => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={[styles.container, props.style]}>
          <Text style={[styles.textLabel, props.labelStyle]}>{props.labelLeft}</Text>
            <CheckBox
                disabled={props.disabled}
                value={toggleCheckBox}
                onValueChange={(value) => setToggleCheckBox(value)}
                tintColors={{ true: Colors.btn_default, false: 'gray' }}
                boxType='square'
            />
            <Text style={[styles.textLabel, props.labelStyle]}>{props.labelRight}</Text>

        </View>




    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textLabel: {
        fontSize: 18,
        fontWeight: 'bold',

    }
});
export default NkCheckbox
