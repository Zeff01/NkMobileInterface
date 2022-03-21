import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import {
    Text,
    StyleSheet,
    Image,
    TextInput,
    ImageBackground,
    ScrollView,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import SQLite from 'react-native-sqlite-storage'


import Div from '../components/div';
import NkTextInput from '../components/nkTextInput';
import NkButton from '../components/nkButton';

// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';

const db = SQLite.openDatabase(
    {
        name: 'Login',
        location: 'default'
    },
    () => { },
    error => console.log(error)
)



const LoginScreen = props => {
    const [errorMessage, setErrorMessage] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const NwClass = useStyles();

    useEffect(() => {
        createSQLTable();
        getData();
    }, [])

    const createSQLTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXIST"
                + "Users"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT)"
            )
        })
    }

    console.log(username)

    const setData = async () => {
        if (username.length == 0) {
            Alert.alert('Alert!', 'Please Enter your Username and Password')
        } else {
            try {
                await db.transaction(async (tx) => {
                    await tx.executeSql(
                        "INSERT INTO Users (Username, Password) VALUES (?,?)"
                        [username, password]
                    );
                })

                props.navigation.navigate('HomeDrawer');
            } catch (error) {
                console.log("hello", error)
            }
        }
    }

    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Username, Password FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length
                        if (len > 0) {
                            props.navigation.navigate('HomeDrawer');
                        }
                    }
                )
            })
        } catch (error) {

        }
    }

    const Login = () => {
        fetch("https://noahv9.promptus8.com/NOAHAPI/api/get/NOAHAuth", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': `${username}`,
                'password': `${password}`,
                'secretkey': 'Askfusqlrcopr',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )

                console.log(responseData.status);
                if (responseData.status == 200) {
                    props.navigation.navigate('HomeDrawer');
                } else {
                    setErrorMessage(responseData.message)
                }
                // login 
            })
            .done((responseData) => {
                //
            }
            );


        // props.navigation.navigate('HomeDrawer')

    }


    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <ImageBackground
                style={styles.container}
            // source={require('../assets/LoginIcons/login_bg.png')}
            >
                <ScrollView>
                    <Div>

                        <Div style={[NwClass.col, NwClass.col_12,]}>
                            <Div style={styles.formItems}>
                                <Image source={require('../assets/LoginIcons/noah_logo_5kb-with-margin-20x10-lower-quality.png')} />
                                <Div style={{ marginHorizontal: 10, }}>
                                    <Text style={styles.formGreetings}>Sign in to NOAH</Text>
                                    <Text style={styles.formText}>Enter your credentials to access your account</Text>

                                    <Div style={styles.textboxContainer}>
                                        <KeyboardAvoidingView
                                            behavior='height'
                                        >
                                            <TextInput
                                                placeholder='Username'
                                                style={styles.textInput}
                                                placeholderTextColor='#b6becc'
                                                onChangeText={value => setUsername(value)}
                                                value={username}
                                                returnKeyType="next"
                                                focus
                                                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                                blurOnSubmit={false}
                                            />
                                            <TextInput
                                                placeholder='Password'
                                                style={styles.textInput}
                                                placeholderTextColor='#b6becc'
                                                onChangeText={value => setPassword(value)}
                                                value={password}
                                                secureTextEntry={true}
                                                ref={(input) => { this.secondTextInput = input; }}
                                            />
                                            <Div style={styles.captchaContainer}>
                                                <Text style={styles.captchaText}>PLEASE ENTER THE TEXT FROM THE IMAGE </Text>
                                                <View style={{ height: 70, overflow: 'hidden' }}>
                                                    <ImageBackground source={require('../assets/LoginIcons/bg-icon-background-captcha.png')}
                                                        style={styles.captcha}
                                                        resizeMode='cover'
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
                                                customClick={() => Login()}
                                            />
                                            <Text style={styles.errorMessage}>{errorMessage}</Text>
                                            <Text style={styles.forgetPassword}>Forgot Password</Text>
                                        </KeyboardAvoidingView>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </ScrollView>
            </ImageBackground>
        </TouchableWithoutFeedback>
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
        height: 50,
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
