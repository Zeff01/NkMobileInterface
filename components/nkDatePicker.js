import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


import DateTimePicker from '@react-native-community/datetimepicker';
import NkButton from './nkButton';
import Colors from '../constants/Colors';


const NkDatePicker = props => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (

        <View style={[styles.container, props.style]}>
            <Text style={[styles.dateText, props.textStyle]}>{date.toUTCString()}</Text>
            <NkButton
                customClick={showDatepicker}
                title={<AntDesign name='calendar' size={22} color='black' />}
                style={styles.button}
                titleStyle={{ fontSize: 15 }}
            />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: .7,
        borderColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        height: 50,
        margin: 0
    },
    button: {
        margin: 0,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: Colors.borderContainer2,
        marginRight: 5

    },
    dateText: {
        color: 'black',
        marginLeft: 5,
    }
});


export default NkDatePicker
