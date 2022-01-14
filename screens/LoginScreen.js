import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, StyleSheet, Image, ImageBackground, ScrollView, View } from 'react-native';



import Div from '../components/div';
import NkTextInput from '../components/nkTextInput';
import NkButton from '../components/nkButton';

import { NwClass } from '../constants/NwClass';


const LoginScreen = props => {
    return (

        <ImageBackground
            style={styles.container}
            source={require('../assets/LoginIcons/login_bg.png')}

        >
            <ScrollView>
                <Div>
                    <Div style={[NwClass.col, NwClass.col_4,]}>

                    </Div>

                    <Div style={[NwClass.col, NwClass.col_8, styles.form]}>
                        <Div style={styles.formItems}>
                            <Image source={require('../assets/LoginIcons/noah_logo_5kb-with-margin-20x10-lower-quality.png')} />
                            <Div style={{ marginHorizontal: 10, }}>
                                <Text style={styles.formGreetings}>Sign in to NOAH</Text>
                                <Text style={styles.formText}>Enter your credentials to access your account</Text>

                                <Div style={styles.textboxContainer}>
                                    <NkTextInput
                                        placeholder='Username'
                                        style={styles.textInput}
                                        placeholderTextColor='#b6becc'
                                    />
                                    <NkTextInput
                                        placeholder='Password'
                                        style={styles.textInput}
                                        placeholderTextColor='#b6becc'
                                    />
                                    <Div style={styles.captchaContainer}>
                                        <Text style={styles.captchaText}>PLEASE ENTER THE TEXT FROM THE IMAGE </Text>
                                        <View style={{ height: 70, overflow: 'hidden' }}>
                                            <ImageBackground source={require('../assets/LoginIcons/bg-icon-background-captcha.png')}
                                                style={styles.captcha}
                                                resizeMode='repeat'
                                            />
                                        </View>


                                        <NkTextInput
                                            style={styles.textInput2}
                                        />
                                    </Div>
                                    <NkButton
                                        style={[NwClass.btn_default, { marginTop: 20, height: 60, backgroundColor: '#1e52a3' }]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Login'
                                        customClick={() => props.navigation.navigate('HomeDrawer')}
                                    />
                                    <Text style={styles.errorMessage}>You have entered an invalid username/password. Please try again. Thank you.</Text>
                                    <Text style={styles.forgetPassword}>Forgot Password</Text>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </ScrollView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 0
    },
    form: {
        width: 600,
        margin: 0
    },
    formItems: {
        marginHorizontal: 50,
    },
    formGreetings: {
        fontSize: 40,
        fontWeight: '600',
        color: '#28396f',
    },
    formText: {
        fontSize: 14,
        opacity: .7,
        color: '#28396f',
        marginTop: 0,
    },
    textboxContainer: {
        marginTop: 10,
    },
    textInput: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#bec8d9',
        height: 60,
    },
    textInput2: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#bec8d9',
        height: 40,
    },
    captchaContainer: {
        borderWidth: 2,
        borderColor: '#bec8d9',
        padding: 10,

    },
    captcha: {
        width: '100%',
        height: 100,

    },
    captchaText: {
        fontWeight: '400',
        color: '#06224d',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10
    },
    errorMessage: {
        fontSize: 14,
        color: '#ff005e',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '400',
        padding: 10
    },
    forgetPassword: {
        fontSize: 14,
        color: '#06224d',
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 10,
    }

});

export default LoginScreen
