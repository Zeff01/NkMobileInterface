import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


import Colors from '../constants/Colors';
import { NwClass } from '../constants/NwClass';

import NkPicker from '../components/nkPicker';
import NkSearchBar from '../components/nkSearchBar';
import Div from '../components/div';
import NkTextInput from '../components/nkTextInput';


const LookUpScreen = props => {
    const [tableHead, setTableHead] = useState(['#', 'Code', 'Description'])
    const [tableText, setTableText] = useState(['1', '2', '3', '4', '5', '6'])
    const [tableData, setTableData] = useState([
        ['1','OCLP-CC', 'Capitol Common'],
        ['2','OCLP-CC', 'Capitol Common'],
        ['3','FPTI', '	Forcasting and Planning Technologies Inc.,'],
        ['4','FPTI', '	Forcasting and Planning Technologies Inc.,'],
        ['5','NOAHV09', 'FPTI NOAH V9'],
        ['6','NOAHV09', 'FPTI NOAH V9'],
    ])

    const inputHandler = (value) => {
        return (
            <View style={styles.inputContainer}    key={value}>
                <NkTextInput
             
                style={[NwClass.txtbox, styles.inputBox]}
                />
            </View>
  
        )
    }

    const [tableInput, setTableInput] = useState([
        '',
        [inputHandler('1')],
        [inputHandler('2')]
    ])

    return (
        <Div style={NwClass.nk_modal_body}>
            <Div style={[NwClass.row, NwClass.margin_y_10]}>
                <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent]}>
                    <Div style={NwClass.row}>
                        <Div style={[NwClass.col, NwClass.col_5]}>
                            <Text style={NwClass.label}>Column Filter</Text>

                        </Div>
                        <Div style={[NwClass.col, NwClass.col_7]}>
                            <NkPicker
                                style={[NwClass.nk_Select, {height: 42,}]}
                                textStyle={NwClass.nk_SelectText}
                            />
                        </Div>
                    </Div>
                    <Div style={NwClass.row}>
                        <Div style={[NwClass.col, NwClass.col_5]}>
                            <Text style={NwClass.label}>Search</Text>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_7]}>
                            <NkSearchBar
                                style={[NwClass.txtbox, {height: 42, paddingVertical: 0,}]}
                                placeholder='Search'
                            // textStyle={NwClass.nk_SelectText}
                            />
                        </Div>
                    </Div>

                </Div>
            </Div>
            <Div style={NwClass.hr} />
            <Div style={NwClass.row}>
                <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent]}>
                    <Div style={NwClass.row}>
                        <Div style={[NwClass.col, NwClass.col_6]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col_12,]}>
                                    <Div style={NwClass.nkPagination}>
                                        <Div style={[NwClass.page_control, NwClass.inlineBlockBtn]}>
                                            <Text style={NwClass.page_controlText}>Prev</Text>
                                        </Div>
                                        <Div style={[NwClass.page_search, NwClass.inlineBlockBtn]}>
                                            <Text style={NwClass.page_search_text}>1</Text>
                                        </Div>
                                        <Div>
                                            <Text style={NwClass.page_of_text}>of</Text>
                                        </Div>
                                        <Div style={[NwClass.page_search, NwClass.inlineBlockBtn]}>
                                            <Text style={NwClass.page_search_text}>1</Text>
                                        </Div>
                                        <Div style={[NwClass.page_control, NwClass.inlineBlockBtn]}>
                                            <Text style={NwClass.page_controlText}>Next</Text>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.margin_y_5]}>
                            <Div style={NwClass.row}>
                                <Div style={NwClass.col_12}>
                                    <Div style={NwClass.found_record}>
                                        <Text style={NwClass.found_recordText}>9 Record(s) Found</Text>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div style={NwClass.row}>
                            <Div style={NwClass.table_wrapper}>
                                <Table style={styles.table}>
                                    <Row data={tableHead} flexArr={[0, 12, 12]} style={styles.head} textStyle={styles.text} />
                                    <Row data={tableInput} flexArr={[0, 12, 12]} style={styles.input} textStyle={styles.text} />
                                    <TableWrapper style={styles.wrapper} >
                                        {/* <Col data={tableText} style={styles.Text} textStyle={styles.text} /> */}
                                        <Rows data={tableData} flexArr={[0, 12, 12]} style={styles.row} textStyle={styles.text} />
                                    </TableWrapper>
                                </Table>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}
//}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
        borderWidth: 0,

    },
    table: {
        borderWidth: .5,
        borderRadius: 15,

    },

    head: {
        height: 60,
        backgroundColor: '#f1f8ff',
        borderWidth: .5,
        padding: 0,

    },
    input: {
        height: 60,
        backgroundColor: '#f1f8ff',
        borderRightWidth: .5,
        borderLeftWidth: .5,
        borderBottomWidth: 0,
        padding: 0,
    },

    wrapper: {
        flexDirection: 'row',
        borderWidth: .5,

    },
    Text: {
        flex: 1,
        borderWidth: 0,
     
    },
    row: {
        height: 50,
        borderBottomWidth: .3,
    
        backgroundColor: 'white'


    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        color: 'black'
    },
    inputContainer:{
        width: 300,
        borderWidth: .5,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden'
    },
    inputBox:{
        borderWidth: 0,
        borderColor: 'white',
        backgroundColor: 'white',
        fontSize: 20,
  
    }

});

export default LookUpScreen
