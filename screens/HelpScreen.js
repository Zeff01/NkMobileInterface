import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Container from '../components/Container';

const HelpScreen = () => {
    return (
        <View>
            <Container style={styles.containerProp, { margin: 10 }}>
                <Text style={{ padding: 10, }}>This area is for Help tab.
                 This area is for Help tab.</Text>
            </Container>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default HelpScreen
