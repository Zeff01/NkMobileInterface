import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Div from './div';

const NkPagination = props => {

    const { numbers } = props;

    return (
        <View>
            <Div style={styles.hr}></Div>
            <View style={styles.container}>

                <TouchableOpacity>
                    <Text style={styles.text}>Prev</Text>
                </TouchableOpacity>

                {Array(props.numbers).fill(0).map((value, index) => (
                    <TouchableOpacity style={
                        index % 2 === 0}
                        key={index}
                    >
                        <Text style={styles.pageCount}>{index + 1}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity>
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
            </View>
            <Div style={styles.hr}></Div>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        marginHorizontal: 10,
        color: '#104b85'
    },
    pageCount: {
        fontSize: 20,
        marginHorizontal: 10,
        color: '#222'
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        width: '90%',
        alignSelf: 'center'
    }
});
export default NkPagination
