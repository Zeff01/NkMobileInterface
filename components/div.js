import React from 'react'
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Div = props => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{



    }
});

export default Div
