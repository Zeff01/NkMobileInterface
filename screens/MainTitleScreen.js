import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Container from '../components/Container';

const MainTitleScreen = () => {
    return (
        <View>
            <Container style={styles.containerProp, {margin: 10}}>
                <Text style={{padding: 10,}}>This area is for Home tab.</Text>
            </Container>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default MainTitleScreen
