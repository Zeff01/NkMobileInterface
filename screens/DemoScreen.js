import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Colors from '../constants/Colors';
import { NwClass } from '../constants/NwClass';

import NkTextInput from '../components/nkTextInput';
import NkButton from '../components/nkButton';
import NkDatePicker from '../components/nkDatePicker';
import NkSearchBar from '../components/nkSearchBar';
import NkPicker from '../components/nkPicker';
import NkGrid from '../components/nkGrid';
import NkCard from '../components/nkCard';
import NkCardtext from '../components/nkCardText';
import Header from '../components/header'
import Footer from '../components/footer'
import NkCheckbox from '../components/nkCheckbox';
import Div from '../components/div'
import NkLookUp from '../components/nkLookUp.';
import NkFilter from '../components/nkFilter';
import NkFilterCheckbox from '../components/nkFilterCheckbox';
import NkForm from '../components/nkForm'
import NkSuccessModal from '../components/nkSuccessModal';
import NkAlertModal from '../components/nkAlertModal';
import NkErrorModal from '../components/nkErrorModal';


import { useOrientation } from '../functions/useOrientation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DemoScreen = props => {

    useOrientation();
    // const orientation = useOrientation();

    const dimheight = Dimensions.get('window').height
    const dimwidth = Dimensions.get('window').width

    // { console.log(dimheight) }
    // { console.log(dimwidth) }

    // if (dimwidth > 771) {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{backgroundColor: 'white'}}>
                <SafeAreaView style={styles.container}>

                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                        <Text style={styles.buttonText}>
                            Sign in with Noah
                        </Text>
                    </LinearGradient>

                    <NkButton 
                    butonTitle
                    title='TEST'/>

                    <Div style={NwClass.container}>
                        <Text style={NwClass.label}>Container</Text>
                    </Div>

                    {/*  Col 1 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-1</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-1</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-1</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-1</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-1</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-1</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                    </Div>
                    {/*  Col 2 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                    </Div>
                    {/*  Col 3 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                    </Div>
                    {/*  Col 4 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-4</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-4</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-4</Text>
                        </Div>
                    </Div>
                    {/*  Col 5 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_5, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-5</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_5, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-5</Text>
                        </Div>
                    </Div>
                    {/*  Col 6 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-6</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-6</Text>
                        </Div>
                    </Div>
                    {/*  Col 7 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_7, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-7</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_5, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-5</Text>
                        </Div>
                    </Div>
                    {/*  Col 8 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_8, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-8</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-4</Text>
                        </Div>
                    </Div>
                    {/*  Col 9 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_9, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-9</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                    </Div>
                    {/*  Col 10 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_10, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-10</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                    </Div>
                    {/*  Col 11 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_11, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-11</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_1, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-1</Text>
                        </Div>
                    </Div>
                    {/*  Col 12 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-12</Text>
                        </Div>
                    </Div>
                    {/*  Col 3-6-3 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-6</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                    </Div>
                    {/*  Col 3-7-2 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_7, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-7</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                    </Div>
                    {/*  Col 5-4-3 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_5, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-5</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-4</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                    </Div>
                    {/*  Col 2-3-4-3 */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_2, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-2</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleDark]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-4</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_3, NwClass.sampleLight]}>
                            <Text style={NwClass.sampleText}>col-3</Text>
                        </Div>
                    </Div>



                    {/* 1 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        placeholder='Textarea'
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}

                    {/* 2 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}></Div>
                                <Div style={[NwClass.col_6, NwClass.inlineBlockBtn]}>
                            
                                    <NkButton
                                        style={NwClass.btn_default}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                            
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_green]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_orange]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_gray]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_gray]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='[Disabled]'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_darkblue]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Button 1'
                                    />
                                </Div>
                            </Div>
                        </Div>


                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}></Div>
                                <Div style={[NwClass.col_6, NwClass.inlineBlockBtn, NwClass.position_x_right]}>
                                    <NkButton
                                        style={NwClass.btn_default}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Button 1'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <Div style={NwClass.c_textarea_w_icon}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea]}
                                            placeholder='Textarea'
                                            numberOfLines={3}
                                        />
                                        <Div style={NwClass.txtarea_icon}>

                                            <NkButton
                                                style={[NwClass.btn_default, NwClass.btn_icon_action]}
                                                titleStyle={NwClass.btnText_default}
                                                buttonTitle
                                                title={
                                                    <View style={NwClass.btn_new}>
                                                        <View style={NwClass.btn_Icon}>
                                                            <Foundation name='page-search' size={25} color='#89b0d2' />
                                                        </View>
                                                    </View>
                                                }
                                            />
                                            <NkButton
                                                style={[NwClass.btn_default, NwClass.btn_icon_action]}
                                                titleStyle={NwClass.btnText_default}
                                                buttonTitle
                                                title={
                                                    <View style={NwClass.btn_new}>
                                                        <View style={NwClass.btn_Icon}>
                                                            <MaterialCommunityIcons name='delete-alert-outline' size={25} color='#89b0d2' />
                                                        </View>
                                                    </View>
                                                }
                                            />
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}></Div>
                                <Div style={[NwClass.col_6, NwClass.inlineBlockBtn]}>
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='newspaper-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>New</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='save-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Save</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='update' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Update</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='delete-alert-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Delete</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='refresh' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Refresh</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Foundation name='page-search' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Inquire</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='account-arrow-right-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Process</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='application-export' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Export</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='application-import' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Import</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnText_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='print-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnText_default}>Print</Text>
                                            </View>
                                        }
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}></Div>
                                <Div style={[NwClass.col_6, NwClass.inlineBlockBtn]}>
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_icon_action]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='delete-alert-outline' size={25} color='#89b0d2' />
                                                </View>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_icon_action]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='delete-alert-outline' size={25} color='#89b0d2' />
                                                </View>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_icon_action]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='update' size={25} color='#89b0d2' />
                                                </View>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_icon_action]}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='account-arrow-right-outline' size={25} color='#89b0d2' />
                                                </View>
                                            </View>
                                        }
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 3 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}></Div>

                                <Div style={[NwClass.col_6, NwClass.inlineBlockBtn, NwClass.position_x_center]}>
                                    <NkButton
                                        style={NwClass.btn_default}
                                        buttonTitle
                                        title='Button 1' />
                                </Div>

                            </Div>
                        </Div>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}></Div>
                                <Div style={NwClass.col_6}>
                                    <NkButton
                                        style={NwClass.btn_default}
                                        buttonTitle
                                        title='Button 1' />
                                </Div>

                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 4 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>

                        </Div>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 5 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>

                        </Div>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_6}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_6}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 6 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_7}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_7}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_7}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_7}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={NwClass.col_7}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={NwClass.col_7}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 7 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={NwClass.txtbox}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={NwClass.txtbox}
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={NwClass.txtbox}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_8]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                        />
                                    </Div>
                                </Div>
                            </Div>


                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextArea</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 8 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15,]}>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                    <Text style={NwClass.label}>TextArea</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 9 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15,]}>

                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col_5, NwClass.margin_auto]}>
                                    <Text style={NwClass.label}>Textbox (remove label prop to remove label)</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkCheckbox
                                            labelRight='Inline same row'
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkCheckbox
                                            labelRight='Inline same row'
                                            boxType={'circle'}
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkCheckbox
                                            labelRight='Inline solo hidden label'
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_5}>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12, NwClass.margin_auto]}>
                                        <NkCheckbox
                                            labelRight='Inline solo hidden label'
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_12, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col_5,]}>
                                        <NkCheckbox
                                            style={NwClass.margin_auto}
                                            labelRight='Centered & no label'
                                        />
                                    </Div>
                                    <Div style={[NwClass.col_5,]}>
                                        <NkCheckbox
                                            style={NwClass.margin_auto}
                                            labelRight='Centered & no label'
                                        />
                                    </Div>
                                </Div>
                            </Div>

                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 10 row parent dropdown */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col_5, NwClass.margin_auto]}>
                                    <Text style={NwClass.label}>Ignore this</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12, NwClass.margin_auto]}>
                                        <NkPicker
                                            searchBar
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 10 row parent dropdown */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto,]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col_5, NwClass.margin_auto]}>
                                    <Text style={NwClass.label}>Dropdown</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12, NwClass.margin_auto]}>
                                        <NkPicker
                                            searchBar
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 10 row parent dropdown */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col_5, NwClass.margin_auto]}>
                                    <Text style={NwClass.label}>Dropdown with search</Text>
                                </Div>
                                <Div style={[NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12, NwClass.margin_auto]}>
                                        <NkPicker
                                            searchBar
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 11 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.row]}>
                            <Div style={[NwClass.col_12, NwClass.margin_auto, NwClass.inlineBlockBtn]}>
                                <NkButton
                                    title='Look-up'
                                    customClick={() => props.navigation.navigate('Look Up')}
                                    style={NwClass.btn_default}
                                    buttonTitle
                                />
                                <NkButton
                                    title='Main Text'
                                    customClick={() => props.navigation.navigate('Main Navigator')}
                                    style={NwClass.btn_default}
                                    buttonTitle
                                />
                                <NkButton
                                    title='Main Text With Textbox'
                                    customClick={() => props.navigation.navigate('Main Navigator Textbox')}
                                    style={NwClass.btn_default}
                                    buttonTitle
                                />
                                <NkButton
                                    title='Color Palette'
                                    buttonTitle
                                    style={NwClass.btn_default}
                                    customClick={() => props.navigation.navigate('Color Palette')}
                                />

                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 12 row parent main Text*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.col}>
                            <Div style={NwClass.tabs}>
                                <Div>
                                    <Text style={NwClass.tabs_Text}>Main Text (Optional)</Text>
                                </Div>
                                <Div>
                                    <Text style={NwClass.tabs_subText}>SubText Lorem ipsum dolor at met (Optional).</Text>
                                </Div>
                                <Div style={NwClass.hr}></Div>
                                <Div style={[NwClass.tabs_content, NwClass.inlineBlockBtn]}>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Home</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>About</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Help</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_text}>
                                        <Text style={NwClass.tabs_textText}>This area is for Home tab.</Text>
                                    </Div>
                                </Div>
                            </Div>

                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 12 row parent main Text*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.col}>
                            <Div style={NwClass.tabs}>
                                <Div>
                                    <Text style={NwClass.tabs_Text}>Main Text — Tab Text is bold (Optional)</Text>
                                </Div>
                                <Div>
                                    <Text style={NwClass.tabs_subText}>SubText Lorem ipsum dolor at met (Optional).</Text>
                                </Div>
                                <Div style={NwClass.hr}></Div>
                                <Div style={[NwClass.tabs_content, NwClass.inlineBlockBtn]}>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Home</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>About</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Help</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_text}>
                                        <Text style={NwClass.tabs_textText}>This area is for Home tab.</Text>
                                    </Div>
                                </Div>
                            </Div>

                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 12 row parent main Text*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.col}>
                            <Div style={NwClass.tabs}>
                                <Div>
                                    <Text style={NwClass.tabs_Text}>Main Text — Tab Text is bold (Optional)</Text>
                                </Div>
                                <Div>
                                    <Text style={NwClass.tabs_subText}>SubText Lorem ipsum dolor at met (Optional).</Text>
                                </Div>
                                <Div style={NwClass.hr}></Div>
                                <Div style={[NwClass.tabs_content, NwClass.inlineBlockBtn]}>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Home</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>About</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Help</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_text}>
                                        <Text style={NwClass.tabs_textText}>This area is for Home tab.</Text>
                                    </Div>
                                </Div>
                            </Div>

                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 12 row parent main Text*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.col}>
                            <Div style={NwClass.tabs}>

                                <Div style={[NwClass.tabs_content, NwClass.inlineBlockBtn]}>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Home</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>About</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_label}>
                                        <Text style={NwClass.tabs_labelText}>Help</Text>
                                    </Div>
                                    <Div style={NwClass.tabs_text}>
                                        <Text style={NwClass.tabs_textText}>This area is for Home tab.</Text>
                                    </Div>
                                </Div>
                            </Div>

                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 13 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6, { justifyContent: 'flex-start' }]}>
                                <NkFilter
                                    Text='Sample Filter'
                                />
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_6]}>
                                <NkForm
                                    Text='User Information'
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 14 row parent alert buttons*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col_6, NwClass.inlineBlockBtn,]}>
                                <NkErrorModal />
                                <NkSuccessModal />
                                <NkAlertModal />
                            </Div>
                            <Div style={[NwClass.col_6, NwClass.inlineBlockBtn,]}>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 14 row parent alert buttons shows*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col_12, NwClass.inlineBlockBtn,]}>
                                <Div style={[NwClass.col_4,]}>
                                    <Div style={[NwClass.mdl_msg_wrap, { alignSelf: 'center' }]}>
                                        <Div>
                                            <Ionicons name='warning-outline' size={70} color='#f75948' />
                                        </Div>
                                        <Div >
                                            <Text style={NwClass.mdl_msg_Text}>
                                                Error Message Design (Text Optional)
                                            </Text>
                                        </Div>
                                        <Div >
                                            <Text style={NwClass.mdl_error_txtmsg}>
                                                Process/Action encountered issues. Please try again later.
                                                (see details)
                                            </Text>
                                        </Div>

                                        <Div style={NwClass.mdl_btn}>
                                            <NkButton
                                                style={NwClass.btn_error_yes}
                                                customClick={() => setModalVisible(!modalVisible)}
                                                buttonTitle
                                                title='Yes'
                                                titleStyle={NwClass.btn_error_yesText}
                                            />

                                            <NkButton
                                                style={NwClass.btn_error_no}
                                                customClick={() => setModalVisible(!modalVisible)}
                                                buttonTitle
                                                title='No'
                                                titleStyle={NwClass.btn_error_noText}
                                            />
                                        </Div>
                                    </Div>
                                </Div>
                                <Div style={[NwClass.col_4,]}>
                                    <Div style={[NwClass.mdl_msg_wrap, { alignSelf: 'center' }]}>
                                        <Div>
                                            <Ionicons name='save-outline' size={70} color='#6c76e0' />
                                        </Div>
                                        {/* <Div >
                            <Text style={NwClass.mdl_msg_Text}>
                                Error Message Design (Text Optional)
                            </Text>
                        </Div> */}
                                        <Div style={NwClass.margin_y_10}>
                                            <Text style={NwClass.mdl_error_txtmsg}>
                                                Your data has been saved successfully!
                                            </Text>
                                            <Text style={NwClass.mdl_error_txtmsg}>
                                                (see details)
                                            </Text>
                                        </Div>

                                        <Div style={NwClass.mdl_btn}>
                                            <NkButton
                                                style={NwClass.btn_save_yes}
                                                customClick={() => setModalVisible(!modalVisible)}
                                                buttonTitle
                                                title='Yes'
                                                titleStyle={NwClass.btn_save_yesText}
                                            />

                                            <NkButton
                                                style={NwClass.btn_save_no}
                                                customClick={() => setModalVisible(!modalVisible)}
                                                buttonTitle
                                                title='No'
                                                titleStyle={NwClass.btn_save_noText}
                                            />
                                        </Div>
                                    </Div>
                                </Div>
                                <Div style={[NwClass.col_4,]}>
                                    <Div style={[NwClass.mdl_msg_wrap, { alignSelf: 'center' }]}>
                                        <Div style={{ alignSelf: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <Ionicons name='alert-circle-outline' size={70} color='#39b364' />
                                            </TouchableOpacity>
                                        </Div>
                                        <Div>
                                            <Ionicons name='newspaper-outline' size={70} color='#39b364' />
                                        </Div>

                                        <Div >
                                            <Text style={NwClass.mdl_msg_AlertText}>
                                                Cannot be Saved!
                                            </Text>
                                        </Div>
                                        <Div >
                                            <Text style={NwClass.mdl_error_txtmsg}>
                                                Please fill in the following required fields
                                            </Text>
                                            <Div style={[NwClass.hrAlert]}></Div>
                                        </Div>



                                        <Div style={[NwClass.mdl_btn]}>

                                            <NkButton
                                                style={NwClass.btn_alert_yes}
                                                customClick={() => setModalVisible(!modalVisible)}
                                                buttonTitle
                                                title='Okay'
                                                titleStyle={NwClass.btn_alert_yesText}
                                            />

                                            <NkButton
                                                style={NwClass.btn_alert_no}
                                                customClick={() => setModalVisible(!modalVisible)}
                                                buttonTitle
                                                title='Cancel'
                                                titleStyle={NwClass.btn_alert_noText}
                                            />
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 13 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6, { justifyContent: 'flex-start' }]}>
                                <NkFilter
                                    Text='Filter by'
                                    textStyle={{ color: '#333' }}
                                />
                            </Div>

                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 13 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col, NwClass.col_10, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6,]}>
                                <NkFilterCheckbox
                                    labelRight='Inline same row'
                                    style={NwClass.borderSolid}
                                    addCheckbox1
                                    addCheckbox2
                                    addCheckbox3
                                    labelStyle={{ fontSize: 17 }}
                                />

                            </Div>
                            <Div style={[NwClass.col, NwClass.col_6,]}>
                                <NkFilterCheckbox
                                    Text='Filter By'
                                    labelRight='Inline same row'
                                    style={NwClass.borderSolid}
                                    addCheckbox1
                                    addCheckbox2
                                    addCheckbox3
                                    labelStyle={{ fontSize: 17 }}
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 13 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6]}>
                                <NkForm
                                    Text='User Information'
                                    style={[NwClass.borderSolid, NwClass.border_NoHorizontal]}
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 13 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6]}>
                                <NkForm
                                    Text='User Information'
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* -------------------------------------------------- */}

                    <NkGrid
                        textHeaderStyle={styles.tableTableHeader}
                        textStyle={styles.tabletTableText}
                    />
                    {/* -------------------------------------------------- */}
                    {/* 13 row parent Card*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.inlineBlockBtn, NwClass.margin_auto,]}>
                        <Div style={[NwClass.col, NwClass.col_8, NwClass.inlineBlockBtn, NwClass.margin_auto,]}>

                            <NkCard
                                imageUri={require('../assets/balloon.jpg')}
                                cardTitle='Card Text here'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               et dolore magna aliqua lorem ipsum dolor lorem'
                                hrBrokenText
                                buttonAction1
                            />
                            <NkCard
                                imageUri={require('../assets/fog.jpg')}
                                cardTitle='Card Text here'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               et dolore magna aliqua lorem ipsum dolor lorem'
                                hrBrokenText
                                buttonAction2
                                buttonAction3
                            />


                        </Div>
                        <Div style={[NwClass.col, NwClass.col_8, NwClass.inlineBlockBtn, NwClass.margin_auto]}>
                            <NkCard
                                imageUri={require('../assets/forest.jpg')}
                                cardButton
                                buttonTitle='Button Text here'
                                cardTitle='Card Text here'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               et dolore magna aliqua lorem ipsum dolor lorem'
                            />
                            <NkCard
                                imageUri={require('../assets/mountain.jpg')}
                                cardButton
                                buttonTitle={<Ionicons name='arrow-forward' size={25} />}
                                iconButton
                                iconName={'arrow-forward'}
                                cardTitle='Card Text here'
                                text='sssLorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              et dolore magna aliqua lorem ipsum dolor lorem'

                            />
                        </Div>

                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 13 row parent CardText*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.inlineBlockBtn, NwClass.margin_auto,]}>
                            <NkCardtext
                                title='Default'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                      et dolore magna aliqua lorem ipsum dolor lorem'
                            />

                            <NkCardtext
                                title='Primary'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                         et dolore magna aliqua lorem ipsum dolor lorem'
                                style={{ backgroundColor: Colors.primaryCard }}

                            />

                            <NkCardtext
                                title='Secondary'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                     et dolore magna aliqua lorem ipsum dolor lorem'
                                style={{ backgroundColor: Colors.secondaryCard }}

                            />
                        </Div>
                    </Div>

                    {/* -------------------------------------------------- */}

                    <View style={{ flexDirection: 'row' }}>
                        <ActivityIndicator />
                        <ActivityIndicator size="large" />
                        <ActivityIndicator size="small" color="#0000ff" />
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>

                    <View>

                    </View>

                    <NkCheckbox
                        label='Checkbox 1'
                    />
                    <NkCheckbox
                        label='Checkbox 2'
                    />
                    <NkCheckbox
                        label='Checkbox 3'
                    />
                    <NkCheckbox
                        label='Checkbox 4'
                    />



                </SafeAreaView>
            </ScrollView >
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 10,
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },



});

export default DemoScreen
