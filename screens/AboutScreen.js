import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Container from '../components/Container';


const AboutScreen = () => {
    return (
        <View>
            <Container style={styles.containerProp, { margin: 10 }}>
                <Text style={{ padding: 10, }}>This area is for About tab.
                 This area is for About tab. This area is for About tab.
                  This area is for About tab. This area is for About tab.</Text>
            </Container>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default AboutScreen
