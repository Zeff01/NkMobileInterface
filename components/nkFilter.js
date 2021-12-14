import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { NwClass } from '../constants/NwClass';
import Div from './div';
import NkCheckbox from './nkCheckbox';
import NkDatePicker from './nkDatePicker';

const NkFilter = props => {
    return (
        <Div style={NwClass.fieldSet}>
            <Text style={[NwClass.legend, props.textStyle]}>{props.title}</Text>
            <Div style={NwClass.row}>
                <Div style={[NwClass.col, NwClass.col_6]}>
                    <Div style={NwClass.row}>
                        <Div style={NwClass.col_12}>
                            <NkCheckbox
                                labelRight='By Date'
                            />
                        </Div>
                    </Div>
                    <Div style={[NwClass.row, NwClass.margin_y_10]}>
                        <Div style={NwClass.col_5}>
                            <Text style={NwClass.label}>From Date</Text>
                        </Div>
                        <Div style={NwClass.col_7}>
                            <NkDatePicker />
                        </Div>
                    </Div>


                    <Div style={NwClass.row}>
                        <Div style={NwClass.col_5}>
                            <Text style={NwClass.label}>To Date</Text>
                        </Div>
                        <Div style={NwClass.col_7}>
                            <NkDatePicker />
                        </Div>
                    </Div>
                </Div>
                <Div style={[NwClass.col, NwClass.col_6]}>
                    <Div style={NwClass.row}>
                        <Div style={NwClass.col_12}>
                            <NkCheckbox
                                labelRight='By Payperiod'
                            />
                        </Div>
                    </Div>
                    <Div style={[NwClass.row, NwClass.margin_y_10]}>
                        <Div style={NwClass.col_5}>
                            <Text style={NwClass.label}>From Date</Text>
                        </Div>
                        <Div style={NwClass.col_7}>
                            <NkDatePicker />
                        </Div>
                    </Div>


                    <Div style={NwClass.row}>
                        <Div style={NwClass.col_5}>
                            <Text style={NwClass.label}>To Date</Text>
                        </Div>
                        <Div style={NwClass.col_7}>
                            <NkDatePicker />
                        </Div>
                    </Div>
                </Div>

            </Div>
        </Div>
    )
}

const styles = StyleSheet.create({


});
export default NkFilter
