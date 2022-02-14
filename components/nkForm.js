import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkButton from './nkButton';
import NkCheckbox from './nkCheckbox';
import NkDatePicker from './nkDatePicker';
import NkPicker from './nkPicker';
import NkTextInput from './nkTextInput';

const NkForm = props => {
    const NwClass = useStyles();
    return (
        <Div style={[NwClass.fieldSet, props.style]}>
            <Text style={[NwClass.legend, props.titleStyle]}>{props.title}</Text>
            <Div style={[NwClass.row, { padding: 20 }]}>
                <Div style={[NwClass.row, NwClass.row_parent]}>
                    <Div style={[NwClass.col, NwClass.col_12]}>
                        <Div>
                            <Text style={NwClass.label}>{props.title}</Text>
                        </Div>
                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5]}>
                                <Text style={NwClass.label}>Last Name</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7]}>
                                <NkTextInput />
                            </Div>
                        </Div>

                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5]}>
                                <Text style={NwClass.label}>First Name</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7]}>
                                <NkTextInput />
                            </Div>
                        </Div>

                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5]}>
                                <Text style={NwClass.label}>Middle Name</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7]}>
                                <NkTextInput />
                            </Div>
                        </Div>

                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5]}>
                                <Text style={NwClass.label}>Gender</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7]}>
                                <NkPicker />
                            </Div>
                        </Div>

                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5,]}>
                                <Text style={NwClass.label}>Date of Birth</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                <Div style={[NwClass.col, NwClass.col_6, NwClass.padding_none]}>
                                    <NkDatePicker />
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_parent, NwClass.col_6, NwClass.inlineBlockBtn,]}>
                                    <Div style={[NwClass.col, NwClass.col_5]}>
                                        <Text style={NwClass.label}>Age</Text>
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_7]}>
                                        <NkTextInput />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div style={[NwClass.row, NwClass.row_parent]}>
                    <Div style={[NwClass.col, NwClass.col_12]}>
                        <Div>
                            <Text style={NwClass.label}>Contact Information</Text>
                        </Div>
                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5]}>
                                <Text style={NwClass.label}>Email Address</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7]}>
                                <NkTextInput />
                            </Div>
                        </Div>
                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5]}>
                                <Text style={NwClass.label}>Mobile Number</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7]}>
                                <NkTextInput />
                            </Div>
                        </Div>
                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col, NwClass.col_5]}>
                                <Text style={NwClass.label}>Tel Number</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_7]}>
                                <NkTextInput />
                            </Div>
                        </Div>
                    </Div>
                </Div>


                <Div style={[NwClass.row, NwClass.margin_auto]}>
                    <Div style={[NwClass.col]}>
                        <NkButton
                            style={NwClass.btn_default}
                            buttonTitle
                            title='Submit'
                        />
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

const styles = StyleSheet.create({

});

export default NkForm
