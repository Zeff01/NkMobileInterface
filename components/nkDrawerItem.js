import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const NkDrawerItem = props => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.customClick}
        >
            <View style={styles.titleContainer}>
                <MaterialCommunityIcons
                    name={props.iconName}
                    size={25}
                    color='red'
                />
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View>
                <MaterialCommunityIcons
                    name='menu-right-outline'
                    size={15}
                    color='red'
                />
            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 1,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'AbadiMTStd',
        marginLeft: 25,
        fontSize: 15,
        color: 'red'
    }
});
export default NkDrawerItem
