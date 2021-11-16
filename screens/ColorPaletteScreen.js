import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View } from 'react-native';

import Colors from '../constants/Colors';
import Container from '../components/Container';



const ColorPaletteScreen = props => {


    const dimheight = Dimensions.get('window').height
    const dimwidth = Dimensions.get('window').width

    { console.log(dimheight) }
    { console.log(dimwidth) }



    if (dimwidth > 900) {
        return (
            <ScrollView style={styles.tabletContainer} >
                <View style={styles.tabletcolorcontainer}>
                    <Container style={[styles.primary,styles.tabletColorSize]}>
                        <Text>Primary</Text>
                    </Container>
                    <Container style={[styles.white, styles.tabletColorSize]}>
                        <Text>White</Text>
                    </Container>
                    <Container style={[styles.black, styles.tabletColorSize]}>
                        <Text style={{ color: '#f3f3f3' }}>Black</Text>
                    </Container>
           
                </View>

                <View style={styles.tabletcolorcontainer}>          
                    <Container style={[styles.container,styles.tabletColorSize ]}>
                        <Text>Container</Text>
                    </Container>
                    <Container style={[styles.borderContainer2, styles.tabletColorSize ]}>
                        <Text>BorderContainer2</Text>
                    </Container>
                    <Container style={[styles.btn_default,styles.tabletColorSize ]}>
                        <Text>btn_default</Text>
                    </Container>
                </View>

                <View style={styles.tabletcolorcontainer}>
                    <Container style={[styles.btn_default_green, styles.tabletColorSize ]}>
                        <Text>btn_default_green</Text>
                    </Container>
                    <Container style={[styles.btn_default_orange,styles.tabletColorSize ]}>
                        <Text>btn_default_orange</Text>
                    </Container>
                    <Container style={[styles.btn_default_gray,styles.tabletColorSize ]}>
                        <Text>btn_default_gray</Text>
                    </Container>
                </View>

                <View style={styles.tabletcolorcontainer}>
                    <Container style={[styles.btn_default_darkblue,styles.tabletColorSize ]}>
                        <Text>btn_default_darkblue</Text>
                    </Container>
                    <Container style={[styles.primaryCard,styles.tabletColorSize ]}>
                        <Text>primaryCard</Text>
                    </Container>
                    <Container style={[styles.secondaryCard,styles.tabletColorSize ]}>
                        <Text>secondaryCard</Text>
                    </Container>
                </View>

                <View style={styles.tabletcolorcontainer}>
                    <Container style={[styles.border_purple,styles.tabletColorSize ]}>
                        <Text>border_purple</Text>
                    </Container>
                    <Container style={[styles.border_dark_orange,styles.tabletColorSize ]}>
                        <Text>border_dark_orange</Text>
                    </Container>
                    <Container style={[styles.border_dark_blue,styles.tabletColorSize ]}>
                        <Text>border_dark_blue</Text>
                    </Container>
                </View>

                <View style={styles.tabletcolorcontainer}>
                    <Container style={[styles.border_accent_purple,styles.tabletColorSize ]}>
                        <Text>border_accent_purple</Text>
                    </Container>
                    <Container style={[styles.border_accent2_28396f,styles.tabletColorSize ]}>
                        <Text>border_accent2_28396f</Text>
                    </Container>
                    <Container style={[styles.border_accent3_62618c,styles.tabletColorSize ]}>
                        <Text>border_accent3_62618c</Text>
                    </Container>
                </View>
                <View style={styles.tabletcolorcontainer}>
                    <Container style={[styles.border_accent4_eb741d,styles.tabletColorSize ]}>
                        <Text>border_accent4_eb741d</Text>
                    </Container>
                    <Container style={[styles.border_accent5_cfd5da,styles.tabletColorSize ]}>
                        <Text>border_accent5_cfd5da</Text>
                    </Container>
                </View>

            </ScrollView>
        )
    }

    return (
        <ScrollView>
            <Container style={styles.primary}>
                <Text>Primary</Text>
            </Container>
            <Container style={styles.black}>
                <Text style={{ color: '#f3f3f3' }}>Black</Text>
            </Container>
            <Container style={styles.white}>
                <Text>White</Text>
            </Container>
            <Container style={styles.container}>
                <Text>Container</Text>
            </Container>
            <Container style={styles.borderContainer2}>
                <Text>BorderContainer2</Text>
            </Container>
            <Container style={styles.btn_default}>
                <Text>btn_default</Text>
            </Container>
            <Container style={styles.btn_default_green}>
                <Text>btn_default_green</Text>
            </Container>
            <Container style={styles.btn_default_orange}>
                <Text>btn_default_orange</Text>
            </Container>
            <Container style={styles.btn_default_gray}>
                <Text>btn_default_gray</Text>
            </Container>
            <Container style={styles.btn_default_darkblue}>
                <Text>btn_default_darkblue</Text>
            </Container>
            <Container style={styles.primaryCard}>
                <Text>primaryCard</Text>
            </Container>
            <Container style={styles.secondaryCard}>
                <Text>secondaryCard</Text>
            </Container>
            <Container style={styles.border_purple}>
                <Text>border_purple</Text>
            </Container>
            <Container style={styles.border_dark_orange}>
                <Text>border_dark_orange</Text>
            </Container>
            <Container style={styles.border_dark_blue}>
                <Text>border_dark_blue</Text>
            </Container>
            <Container style={styles.border_accent_purple}>
                <Text>border_accent_purple</Text>
            </Container>
            <Container style={styles.border_accent2_28396f}>
                <Text>border_accent2_28396f</Text>
            </Container>
            <Container style={styles.border_accent3_62618c}>
                <Text>border_accent3_62618c</Text>
            </Container>
            <Container style={styles.border_accent4_eb741d}>
                <Text>border_accent4_eb741d</Text>
            </Container>
            <Container style={styles.border_accent5_cfd5da}>
                <Text>border_accent5_cfd5da</Text>
            </Container>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tabletContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    tabletcolorcontainer: {
        flexDirection: 'row',
        width: '50%'
    },
    tabletColorSize:{
        height: 200, 
        margin: 20,
         width: '60%',
    },
    primary: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },

    black: {
        backgroundColor: Colors.black,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    white: {
        backgroundColor: Colors.white,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    container: {
        backgroundColor: Colors.container,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    borderContainer2: {
        backgroundColor: Colors.borderContainer2,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    btn_default: {
        backgroundColor: Colors.btn_default,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    btn_default_green: {
        backgroundColor: Colors.btn_default_green,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    btn_default_orange: {
        backgroundColor: Colors.btn_default_orange,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    btn_default_gray: {
        backgroundColor: Colors.btn_default_gray,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    btn_default_darkblue: {
        backgroundColor: Colors.btn_default_darkblue,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    primaryCard: {
        backgroundColor: Colors.primaryCard,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    secondaryCard: {
        backgroundColor: Colors.primaryCard,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_purple: {
        backgroundColor: Colors.border_purple,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_dark_orange: {
        backgroundColor: Colors.border_dark_orange,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_dark_blue: {
        backgroundColor: Colors.border_dark_blue,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_accent_purple: {
        backgroundColor: Colors.border_accent_purple,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_accent2_28396f: {
        backgroundColor: Colors.border_accent2_28396f,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_accent3_62618c: {
        backgroundColor: Colors.border_accent3_62618c,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_accent4_eb741d: {
        backgroundColor: Colors.border_accent4_eb741d,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
    border_accent5_cfd5da: {
        backgroundColor: Colors.border_accent5_cfd5da,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
    },
});
export default ColorPaletteScreen
