import React from 'react'
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Container = props => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.container,
        borderColor: Colors.borderContainer,
        borderWidth: 0.5,
        borderRadius: 6,
        elevation: 0.5,
    }
});

export default Container
