import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { NwClass } from '../constants/NwClass';

import Div from '../components/div';
import NkTextInput from '../components/nkTextInput';
import NkDatePicker from '../components/nkDatePicker';
import NkButton from '../components/nkButton';

const MainTitleScreen = () => {
    return (
        <View style={styles.container}>
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
                                        titleStyle={NwClass.btnTitle_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_green]}
                                        titleStyle={NwClass.btnTitle_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_orange]}
                                        titleStyle={NwClass.btnTitle_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_gray]}
                                        titleStyle={NwClass.btnTitle_default}
                                        buttonTitle
                                        title='Button 1'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_gray]}
                                        titleStyle={NwClass.btnTitle_default}
                                        buttonTitle
                                        title='[Disabled]'

                                    />
                                    <NkButton
                                        style={[NwClass.btn_default, NwClass.btn_default_darkblue]}
                                        titleStyle={NwClass.btnTitle_default}
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
                                        titleStyle={NwClass.btnTitle_default}
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
                                                titleStyle={NwClass.btnTitle_default}
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
                                                titleStyle={NwClass.btnTitle_default}
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
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='newspaper-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>New</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='save-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Save</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='update' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Update</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='delete-alert-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Delete</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='refresh' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Refresh</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Foundation name='page-search' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Inquire</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='account-arrow-right-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Process</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='application-export' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Export</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <MaterialCommunityIcons name='application-import' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Import</Text>
                                            </View>
                                        }
                                    />
                                    <NkButton
                                        style={NwClass.btn_action}
                                        buttonTitle
                                        titleStyle={NwClass.btnTitle_default}
                                        title={
                                            <View style={NwClass.btn_new}>
                                                <View style={NwClass.btn_Icon}>
                                                    <Ionicons name='print-outline' size={25} color='white' />
                                                </View>
                                                <Text style={NwClass.btnTitle_default}>Print</Text>
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
                                        titleStyle={NwClass.btnTitle_default}
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
                                        titleStyle={NwClass.btnTitle_default}
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
                                        titleStyle={NwClass.btnTitle_default}
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
                                        titleStyle={NwClass.btnTitle_default}
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
        </View>
    )
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10
}
});
export default MainTitleScreen
