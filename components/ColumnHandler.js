import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import ColumnOne from '../components/ColumnOne';
import ColumnTwo from '../components/ColumnTwo';

import Colors from '../constants/Colors';

const ColumnHandler = props => {

    const { columns } = props;

    return (
        // <View style={styles.container}>
        // <ColumnOne text={'Col-1'} />
        // <ColumnTwo text={'Col-2'} />
        // <ColumnOne text={'Col-1'} />
        // <ColumnTwo text={'Col-2'} />
        // <ColumnOne text={'Col-1'} />
        // <ColumnTwo text={'Col-2'} />
        // <ColumnOne text={'Col-1'} />
        // <ColumnTwo text={'Col-2'} />
        // <ColumnOne text={'Col-1'} />
        // <ColumnTwo text={'Col-2'} />
        // <ColumnOne text={'Col-1'} />
        // <ColumnTwo text={'Col-2'} />
        // </View>
        <View style={styles.container}>
            {Array(props.columns).fill(0).map((value, index) => (
                <View style={[styles.column,
                index % 2 === 0 && { backgroundColor: Colors.btn_default_darkblue }]}
                key={index}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>Col-1</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',

    },

    column: {
        flex: 1,
        backgroundColor: Colors.borderContainer2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ColumnHandler
