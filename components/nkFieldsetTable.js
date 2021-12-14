import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Colors from '../constants/Colors';
import { NwClass } from '../constants/NwClass';

import NkPicker from '../components/nkPicker';
import NkSearchBar from '../components/nkSearchBar';
import Div from '../components/div';
import NkTextInput from '../components/nkTextInput';
import NkButton from './nkButton';

const NkFieldsetTable = props => {
    const [tableHead, setTableHead] = useState([
        '',
        '#',
        'Remaining Budget Qty',
        'Remaining Budget Amount (VATEX)',
        'Item Group Type',
        'Item',
        'UOM',
        'Qty*',
        'Unit Cost (VATIN)*',
        'Unit Cost (VATEX)*',
        'QCY Amount (VATIN)',
        'QCY Amount (VATIN)',
        '[Segment 2]',
        '[Segment 3]',
        '[Segment 4]',
        '[Segment 5]',
        '[Segment 6]*',
        'Budget Allocation',


    ])
    const [tableText, setTableText] = useState(['1', '2', '3', '4', '5', '6'])
    const [tableData, setTableData] = useState([
        ['1', '3000.00', '1000.00', 'Item Group Type 1 1 1', 'Item', '11', '23', '22', '2222', '3333', '4444', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5', 'Segment 6', 'Budget Alloc',],
        ['2', '3000.00', '1000.00', 'Item Group Type 1 1 1', 'Item', '11', '23', '22', '2222', '3333', '4444', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5', 'Segment 6', 'Budget Alloc',],
        ['3', '3000.00', '1000.00', 'Item Group Type 1 1 1', 'Item', '11', '23', '22', '2222', '3333', '4444', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5', 'Segment 6', 'Budget Alloc',],
    ])

    const inputHandler = (value) => {
        return (
            <View style={styles.inputContainer} key={value}>
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

    const buttonHandler = (value) => {
        return (
            <NkButton
                title={<View style={{ flexDirection: 'row' }}>

                    <Feather name='edit-2' size={15} color='white' />
                    <Text style={styles.buttonText}> Edit</Text>
                </View>}
                key={value}
                style={styles.button}
            />
        )
    }

    const [tableButton, setTableButton] = useState([
        [buttonHandler('1')],
        [buttonHandler('2')],
        [buttonHandler('3')],
    ])

    return (
        <Div style={[NwClass.fieldSet, props.style,]}>
            <Text style={[NwClass.legend, props.textStyle]}>{props.title}</Text>
            <Div style={[NwClass.row,]}>
                <Div style={NwClass.nk_modal_body}>
                    <Div style={[NwClass.row, NwClass.margin_y_10]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5, NwClass.inlineBlockBtn, NwClass.position_x_left]}>
                                    <NkButton
                                        buttonTitle
                                        title={
                                            <View style={styles.iconContainer}>
                                                <Ionicons name='construct-outline' size={25} color='rgb(37, 97, 156)' />
                                            </View>
                                        }
                                        style={styles.icon}
                                    />
                                    <NkButton
                                        buttonTitle
                                        title={
                                            <View style={styles.iconContainer}>
                                                <Ionicons name='arrow-redo-circle-outline' size={25} color='rgb(37, 97, 156)' />
                                            </View>
                                        }
                                        style={styles.icon}
                                    />
                                    <Div style={NwClass.vr} />
                                    <NkButton
                                        buttonTitle
                                        title={
                                            <View style={styles.iconContainer}>
                                                <Ionicons name='enter-outline' size={25} color='rgb(37, 97, 156)' />
                                            </View>
                                        }
                                        style={styles.icon}
                                    />
                                    <NkButton
                                        buttonTitle
                                        title={
                                            <View style={styles.iconContainer}>
                                                <Ionicons name='git-merge-outline' size={25} color='rgb(37, 97, 156)' />
                                            </View>
                                        }
                                        style={styles.icon}
                                    />
                                    <Div style={NwClass.vr} />
                                    <NkButton
                                        buttonTitle
                                        title={
                                            <View style={styles.iconContainer}>
                                                <Ionicons name='shapes-outline' size={25} color='rgb(37, 97, 156)' />
                                            </View>
                                        }
                                        style={styles.icon}
                                    />
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkSearchBar
                                        style={[NwClass.txtbox, { height: 42, paddingVertical: 0, }]}
                                        placeholder='Filter'
                                    // textStyle={NwClass.nk_SelectText}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div style={NwClass.row}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent]}>
                            <Div style={[NwClass.row,]}>
                                <Div style={NwClass.row}>
                                    <Div style={[NwClass.table_wrapper]}>
                                        <ScrollView
                                            horizontal={true}
                                        >
                                            <Table style={styles.table}>
                                                <Row data={tableHead} widthArr={[250, 0, 0, 300, 130, 150, 150, 150, 150, 150, 150, 150, 200, 150, 150, 150, 150, 190]} flexArr={[1, 3, 3,]} style={styles.head} textStyle={styles.text} />
                                                {/* <Row data={tableInput} flexArr={[1, 3, 3,]} style={styles.input} textStyle={styles.text} /> */}


                                                <TableWrapper style={styles.wrapper} >
                                                    <Col data={tableButton} style={styles.buttonContainer} textStyle={styles.text} />
                                                    {/* <Col data={tableText} style={styles.Text} textStyle={styles.text} /> */}
                                                    <Rows data={tableData} widthArr={[270, 0, 0, 220, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,]} flexArr={[1, 8, 8,]} style={styles.row} textStyle={styles.rowText} />
                                                </TableWrapper>
                                            </Table>
                                        </ScrollView>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    table: {
        borderRadius: 15,
    },

    head: {
        height: 60,
        backgroundColor: '#f1f8ff',
        borderWidth: .5,
        borderBottomWidth: 2,
        padding: 0,
        borderBottomColor: '#3885d2',


    },
    buttonContainer: {
        marginHorizontal: 15,
    },
    button: {
        backgroundColor: '#3885d2',
        margin: 0,
        padding: 10,
        borderRadius: 5,
        width: 70
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
    },

    wrapper: {
        flexDirection: 'row',
    },
    rowText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 20,
        color: 'black'
    },

    row: {
        height: 50,
        borderBottomWidth: .3,
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        color: 'black'
    },

    iconContainer: {
        flexDirection: 'row',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 0,
        marginHorizontal: 5


    },
    iconText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',

    }

});


export default NkFieldsetTable
