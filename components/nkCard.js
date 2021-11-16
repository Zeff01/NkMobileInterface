import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import NkButton from './nkButton';
import Div from './div';
import { NwClass } from '../constants/NwClass';

const NkCard = props => {
    return (
        <Div style={[styles.cardContainer, props.style,]}>
            <Div >
                {props.imageUri && (
                    <ImageBackground
                        source={props.imageUri}
                        resizeMode='cover'
                        style={[styles.imageStyle, props.imageStyles]}
                    >
                        <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.cardTitle, props.titleStyle]}>{props.cardTitle}</Text>
                            {props.cardButton && (
                                <NkButton
                                    title={props.buttonTitle}
                                    style={[styles.button, props.buttonStyle]}
                                    customClick={props.customClick}
                                    titleStyle={[styles.buttonTitle, props.buttonTitleStyle]}
                                    iconButton
                                />
                            )}
                        </Div>
                    </ImageBackground>
                )}
            </Div>

            <Div style={styles.textContainer}>
                <Text style={[styles.NkCardtext, props.textStyle]}>{props.text}</Text>

            </Div>

            {props.hrBrokenTitle && (
                <Div style={NwClass.hrDashed} />
            )}


            <Div style={styles.cardAction}>


                {props.buttonAction1 && (
                    <TouchableOpacity>
                        <Text>Read more</Text>
                    </TouchableOpacity>
                )}
                {props.buttonAction2 && (
                    <TouchableOpacity>
                        <Text>Link Button </Text>
                    </TouchableOpacity>
                )}
                {props.buttonAction3 && (
                    <TouchableOpacity>
                        <Text> Link Button</Text>
                    </TouchableOpacity>
                )}

            </Div>


        </Div>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: .2,
        borderColor: 'black',
        margin: 10,
        justifyContent: 'center',
        borderRadius: 6,
        width: 350,
        flex: 1,
        overflow: 'hidden'

    },
    imageStyle: {
        width: '100%',
        height: 300,
        justifyContent: 'flex-end',
        position: 'relative'

    },
    textContainer: {
        alignItems: 'flex-start',
    },
    NkCardtext: {
        padding: 10,
        fontSize: 15,
        lineHeight: 26,
        textAlign: 'left',
        marginBottom: 20,
    },
    cardTitle: {
        color: Colors.white,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 20,
        fontWeight: '900'
    },
    button: {
        position: 'absolute',
        right: 10,
        bottom: -20,
        height: 35,
        margin: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: Colors.btn_default

    },
    buttonTitle: {
        fontSize: 13,
        color: 'white',

    },
    cardAction: {
        position: 'relative',
        padding: 20,
        marginTop: 20,
        flexDirection: 'row',
    }
});
export default NkCard
