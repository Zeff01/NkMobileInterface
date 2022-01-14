import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import NkButton from './nkButton';
import { useNavigation } from '@react-navigation/native';

import { NwClass } from '../constants/NwClass';
import NkTextInput from './nkTextInput';


//landscape tablet, 992px and up
var tabletLandscape = 900;

//portrait tablet 769px - 992px
var tabletPortait = 750;

//landscape phone, 577px - 771px
var phoneLandscape = 771;

//portrait phones, less than 576
var phonePortrait = 576;

const dimheight = Dimensions.get('window').height
const dimwidth = Dimensions.get('window').width



const Header = props => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-prev-22x22p-design.png')} />
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-prev-22x22p-design.png')} />
                        </View>
                    }
                    style={styles.button}
                />
                <View style={{ margin: 0 }}>
                    <NkTextInput
                        placeholder='0'
                        style={NwClass.headertxtInput}
                    />
                </View>

                <Text> of </Text>
                <Text> 100 </Text>
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-next-22x22p-design.png')} />
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-next-22x22p-design.png')} />
                        </View>
                    }
                    style={styles.button}
                />

                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_new_blue_colored_20x20_72px.png')} />
                            {/* <Ionicons name='newspaper-outline' size={25} color='rgb(37, 97, 156)' /> */}
                            <Text style={styles.buttonText}>New</Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_save_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Save</Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_update_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Update</Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_delete_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Delete</Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_refresh2_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Refresh</Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_inquire_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Inquire</Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_process2_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Process</Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_export_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Export </Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_import_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Import </Text>
                        </View>
                    }
                    style={styles.button}
                />
                <NkButton
                    buttonTitle
                    title={
                        <View style={NwClass.btn_title_with_icon}>
                            <Image style={NwClass.headerIcon} source={require('../assets/demoIcons/toolbar/icon-nw_v2_print_blue_colored_20x20_72px.png')} />
                            <Text style={styles.buttonText}>Print</Text>
                        </View>
                    }
                    style={styles.button}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Logout</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',

    },
    button: {
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 0,
        marginHorizontal: (dimwidth > phoneLandscape) ? 4.5 : 9.5,
        //less spacing adjustment ^
    },
    buttonText: {
        fontSize: 15,
        color: '#333',
        fontFamily: 'AbadiMTStd',
        marginLeft: 5
    }
});

export default Header
