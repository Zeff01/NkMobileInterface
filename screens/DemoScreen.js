import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    Dimensions,
    Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

import * as Progress from 'react-native-progress';
//import CircularProgress from 'react-native-circular-progress-indicator';

import Colors from '../constants/Colors';
// import { NwClass } from '../constants/NwClass';

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
import NkFieldsetTable from '../components/nkFieldsetTable';
import NkDiskette from '../components/nkDiskette';
import NkPagination from '../components/nkPagination';
import ColumnHandler from '../components/ColumnHandler';


import { useOrientation } from '../functions/useOrientation';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
import NkStickyFieldsetTable from '../components/nkStickyFieldsetTable';
import { useStyles } from '../functions/Orientation';

const xmlSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" class="nw-svg-d-error"
     data-name="Layer 1" viewBox="0 0 60 60" width="60px" height="60px">
        <path class="nw-svg-d-error-a"
         d="M52.18,56H25.7a3.49,3.49,0,0,1-3-5.25L35.91,27.82a3.46,3.46,0,0,1,2.84-1.75A3.5,3.5,0,0,1,42,27.82L55.21,50.75a3.49,3.49,0,0,1,0,3.5A3.46,3.46,0,0,1,52.18,56Zm-27-3.5a.53.53,0,0,0,.07.25.51.51,0,0,0,.44.25H52.18a.48.48,0,0,0,.43-.25.53.53,0,0,0,.07-.25.5.5,0,0,0-.07-.25L39.37,29.32a.5.5,0,0,0-.87,0L25.26,52.25A.5.5,0,0,0,25.19,52.5ZM38,5H8A4,4,0,0,0,4,9V45a4,4,0,0,0,4,4H18.5A1.5,1.5,0,0,0,20,47.5h0A1.5,1.5,0,0,0,18.5,46H9a2,2,0,0,1-2-2V10A2,2,0,0,1,9,8H37a2,2,0,0,1,2,2V21.5A1.5,1.5,0,0,0,40.5,23h0A1.5,1.5,0,0,0,42,21.5V9A4,4,0,0,0,38,5Zm3,39.5v-7A1.5,1.5,0,0,0,39.5,36h-1A1.5,1.5,0,0,0,37,37.5v7A1.5,1.5,0,0,0,38.5,46h1A1.5,1.5,0,0,0,41,44.5ZM39,48a2,2,0,1,0,2,2A2,2,0,0,0,39,48ZM31,18.5h0A1.5,1.5,0,0,0,29.5,17h-16A1.5,1.5,0,0,0,12,18.5h0A1.5,1.5,0,0,0,13.5,20h16A1.5,1.5,0,0,0,31,18.5Zm3,7h0A1.5,1.5,0,0,0,32.5,24h-19A1.5,1.5,0,0,0,12,25.5h0A1.5,1.5,0,0,0,13.5,27h19A1.5,1.5,0,0,0,34,25.5Zm-7,7h0A1.5,1.5,0,0,0,25.5,31h-12A1.5,1.5,0,0,0,12,32.5h0A1.5,1.5,0,0,0,13.5,34h12A1.5,1.5,0,0,0,27,32.5Z"></path>
    </svg>
 `;

const svghehe = `<svg xmlns="http://www.w3.org/2000/svg" id="f2ff553f-f418-4867-83ca-3ed8378485b0" data-name="Layer 1" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60"><defs><style>.b56f5e17-4582-439e-a7d5-5cc2759ef301{fill:#39b364;}.aea26e0b-609f-4806-96d9-79924de6a04f{fill:#deffe8;}</style></defs><title>mdl-info-svg-icon-1-01</title><path class="b56f5e17-4582-439e-a7d5-5cc2759ef301" d="M56,30A26,26,0,1,1,30,4,26,26,0,0,1,56,30Z"/><path class="aea26e0b-609f-4806-96d9-79924de6a04f" d="M30,7A23,23,0,1,0,53,30,23,23,0,0,0,30,7Zm0,43A20,20,0,1,1,50,30,20,20,0,0,1,30,50Zm3-23.61V41.61A1.39,1.39,0,0,1,31.61,43H28.39A1.39,1.39,0,0,1,27,41.61V26.39a1.34,1.34,0,0,1,.05-.35A5,5,0,0,0,33,26,1.34,1.34,0,0,1,33,26.39ZM30,23a3,3,0,1,1,3-3A3,3,0,0,1,30,23Z"/></svg>`

const DemoScreen = props => {

    const NwClass = useStyles();

    return (
        <View style={{ flex: 1, }}>
            <View style={[NwClass.nk_toolbar,]}>
                <Div style={[NwClass.row, NwClass.row_parent,]}>
                    <Div style={[NwClass.col, NwClass.col_12,]}>
                        <Header />
                    </Div>
                </Div>
            </View>

            <ScrollView style={{ backgroundColor: 'white' }}>
                <SafeAreaView style={styles.container}>

                    {/* <Svg
                        width="500"
                        height="500"
                        xml={svghehe}
                    /> */}
                    {/* 
                     <Svg height="50%" width="50%" viewBox="0 0 100 100">
                        <Circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="blue"
                            strokeWidth="2.5"
                            fill="green"
                        />
                    </Svg> 
                     */}



                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                        <Text style={styles.buttonText}>
                            Sign in with Noah
                        </Text>
                    </LinearGradient>


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
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent,]}>
                            <Div style={[NwClass.row,]}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
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
                    {/* 2 row parent  with buttons 1-6*/}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>

                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}></Div>
                                <Div style={[NwClass.col, NwClass.col_6, NwClass.inlineBlockBtn]}>

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
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}></Div>
                                <Div style={[NwClass.col, NwClass.col_6, NwClass.inlineBlockBtn, NwClass.position_x_right]}>
                                    <NkButton
                                        style={NwClass.btn_default}
                                        titleStyle={NwClass.btnText_default}
                                        buttonTitle
                                        title='Button 1'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
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
                                <Div style={[NwClass.col_6]}></Div>
                                <Div style={[NwClass.col_6, NwClass.inlineBlockBtn,]}>
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
                                <Div style={[NwClass.col_6]}></Div>
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
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}></Div>

                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn, NwClass.position_x_center]}>
                                    <NkButton
                                        style={NwClass.btn_default}
                                        buttonTitle
                                        title='Button 1' />
                                </Div>

                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkDatePicker
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}></Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkButton
                                        style={NwClass.btn_default}
                                        buttonTitle
                                        title='Button 1' />
                                </Div>

                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 4 row parent triple textbox*/}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>

                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 5 row parent triple textbox*/}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>

                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_6]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 6 row parent */}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={[NwClass.txtbox, NwClass.txtarea]}
                                        numberOfLines={3}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                        placeholder='TextBox'
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>TextBox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
                                    <NkTextInput
                                        style={NwClass.txtbox}
                                    />
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7]}>
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
                    {/* 12 row parent main Text*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.col}>
                            <Div style={NwClass.tabs}>
                                <Div>
                                    <Text style={NwClass.tabs_Text}>Filter By</Text>
                                </Div>
                                <Div style={[NwClass.hr2]}></Div>
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
                                    <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent]}>
                                        <Div style={NwClass.row}>
                                            <Div style={[NwClass.col, NwClass.col_12, NwClass.inlineBlockBtn, NwClass.position_x_left]}>
                                                <NkButton
                                                    buttonTitle
                                                    title={
                                                        <View style={NwClass.btn_title_with_icon}>
                                                            <Feather name='plus-square' size={25} color='white' />
                                                            <Text style={{ color: 'white', margin: 10 }}>Add to list</Text>
                                                        </View>
                                                    }
                                                    style={NwClass.btn_default}
                                                />
                                                <NkButton
                                                    buttonTitle
                                                    title={
                                                        <View style={NwClass.btn_title_with_icon}>
                                                            <Feather name='minus-square' size={25} color='white' />
                                                            <Text style={{
                                                                color: 'white', margin: 10
                                                            }} >Clear list</Text>
                                                        </View>
                                                    }
                                                    style={NwClass.btn_default}
                                                />
                                            </Div>
                                        </Div>
                                        <Div style={NwClass.row}>
                                            <Div style={NwClass.tabs_text}>
                                            </Div>
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
                                    title='Sample Filter'
                                />
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_6]}>
                                <NkForm
                                    title='User Information'
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 14 row parent Fieldset with Table*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_10, { justifyContent: 'flex-start' }]}>
                                <NkFieldsetTable
                                    title='Use this fieldset for Table only'
                                    textStyle={{ color: 'black', fontWeight: '600', fontFamily: 'AbadiMTStd', fontSize: 17, top: -12 }}
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 14 row parent STICKY Fieldset with Table*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_10, { justifyContent: 'flex-start' }]}>
                                <NkStickyFieldsetTable
                                    title='Sticky Fieldset Table'
                                    textStyle={{ color: 'black', fontWeight: '600', fontFamily: 'AbadiMTStd', fontSize: 17, top: -12 }}
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}

                    {/* 15 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6, { justifyContent: 'flex-start' }]}>
                                <NkFilter
                                    title='Filter by'
                                    textStyle={{ color: '#333' }}
                                />
                            </Div>

                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 15 row parent legends and form*/}
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
                                    title='Filter By'
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
                    {/* 15 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn,]}>
                            <Div style={[NwClass.col, NwClass.col_6,]}>
                                <NkForm
                                    title='User Information'
                                    style={[NwClass.borderSolid, NwClass.border_NoHorizontal]}
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}
                    {/* 15 row parent legends and form*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6]}>
                                <NkForm
                                    title='User Information'
                                />
                            </Div>
                        </Div>
                    </Div>
                    {/* -------------------------------------------------- */}

                    {/* 16 row parent PROGRESS BAR/ ACTIVITY INDICATOR*/}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6]}>
                                <Progress.Bar
                                    progress={1}
                                    style={[NwClass.progressBar, { height: 5, }]}
                                    width={600}
                                    height={200}
                                    color='#52b7c1'
                                    unfilledColor='#e9ecef'
                                />
                                <Progress.Bar
                                    progress={2}
                                    style={[NwClass.progressBar, { height: 15, }]}
                                    width={600}
                                    height={200}
                                    color='#52b7c1'
                                    unfilledColor='#e9ecef'
                                />
                                <Progress.Bar
                                    progress={3}
                                    style={[NwClass.progressBar, { height: 25, }]}
                                    width={600}
                                    height={50}
                                    indeterminate={false}
                                    color='#52b7c1'
                                    unfilledColor='#e9ecef'
                                />
                                <Progress.Bar
                                    progress={4}
                                    style={[NwClass.progressBar, { height: 35, }]}
                                    width={600}
                                    height={100}
                                    indeterminate={true}
                                    indeterminateAnimationDuration={5000}
                                    color='#52b7c1'
                                    unfilledColor='#e9ecef'
                                />
                                <Progress.Bar
                                    progress={1}
                                    style={[NwClass.progressBar, { height: 45, }]}
                                    width={600}
                                    height={150}
                                    indeterminate={true}
                                    indeterminateAnimationDuration={5000}
                                    color='#52b7c1'
                                    unfilledColor='#e9ecef'
                                    animationType='decay'
                                />
                                <Progress.Bar
                                    style={[NwClass.progressBar, { height: 55, }]}
                                    width={600}
                                    height={300}
                                    indeterminate={true}
                                    indeterminateAnimationDuration={5000}
                                    color='#52b7c1'
                                    unfilledColor='#e9ecef'
                                    progress={1}
                                    useNativeDriver={true}
                                    animationType='decay'
                                />
                            </Div>
                        </Div>
                    </Div>
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent, NwClass.inlineBlockBtn]}>
                            <Div style={[NwClass.col, NwClass.col_6, NwClass.inlineBlockBtn]}>
                                <Progress.Pie
                                    progress={.5}
                                    size={100}
                                    indeterminate={true}
                                    style={NwClass.progressCircle}
                                />
                                <Progress.Pie
                                    size={100}
                                    indeterminate={false}
                                    showsText={true}
                                    style={NwClass.progressCircle}
                                />
                                <Progress.Circle
                                    size={50}
                                    indeterminate={true}
                                    showsText={true}
                                    style={NwClass.progressCircle}
                                    borderWidth={5}
                                    allowFontScaling
                                >
                                    <Text>Hello</Text>
                                </Progress.Circle>
                                <Progress.Circle
                                    size={70}
                                    indeterminate={true}
                                    showsText={false}
                                    style={NwClass.progressCircle}
                                    thickness={10}
                                    color='orange'
                                    borderWidth={3}
                                />
                                <Progress.Circle
                                    size={90}
                                    indeterminate={true}
                                    showsText={true}
                                    style={NwClass.progressCircle}
                                    thickness={5}
                                    color='red'
                                    borderWidth={2}

                                />
                            </Div>
                        </Div>
                    </Div>

                    {/* 16 row parent alert buttons*/}
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
                    {/* 17 row parent alert buttons shows*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto]}>
                        <Div style={NwClass.row}>
                            <Div style={[NwClass.col_12, NwClass.inlineBlockBtn,]}>
                                <Div style={[NwClass.col_4,]}>
                                    <Div style={[NwClass.mdl_msg_wrap, { alignSelf: 'center' }]}>
                                        <Div>
                                            <Image style={NwClass.errorIcon} source={require('../assets/demoIcons/Modal-icon/error-red-png-type-60x60.png')} />
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
                                            <Image style={NwClass.successIcon} source={require('../assets/demoIcons/Modal-icon/logout-violet-png-type-60x60.png')} />
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
                                                <Image style={NwClass.alertIcon2} source={require('../assets/demoIcons/Modal-icon/info-green-circle-png-type-60x60.png')} />
                                            </TouchableOpacity>
                                        </Div>
                                        <Div>
                                            <Image style={NwClass.alertIcon} source={require('../assets/demoIcons/Modal-icon/info-green-png-type-60x60.png')} />
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
                    {/* -------------------------------------------------- */}

                    <NkGrid
                        textHeaderStyle={styles.tableTableHeader}
                        textStyle={styles.tabletTableText}
                    />
                    {/* -------------------------------------------------- */}
                    {/* 18 row parent Card*/}
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
                    {/* 18 row parent CardText*/}
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

                    {/* 18 row parent CardText*/}
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto,]}>
                        <NkPagination
                            numbers={5}
                        />
                    </Div>
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto,]}>
                        <NkPagination
                            numbers={10}
                        />
                    </Div>
                    <Div style={[NwClass.row, NwClass.row_parent, NwClass.margin_auto,]}>
                        <NkPagination
                            numbers={15}
                        />
                    </Div>
                    {/* -------------------------------------------------- */}

                    <View style={{ flexDirection: 'row', marginBottom: 30, }}>
                        <ActivityIndicator />
                        <ActivityIndicator size="large" />
                        <ActivityIndicator size="small" color="#0000ff" />
                        <ActivityIndicator size={40} color="#00ff00" />
                    </View>




                    <View style={{ flexDirection: 'row' }}>

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
                    </View>
                    {/* 19 row parent colored Text box*/}
                    {/* Purple BORDER */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Add this class [border_purple] to the component itself</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_8]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_purple}
                                            lookupStyle={{ backgroundColor: Colors.border_purple }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_purple}
                                            lookupStyle={{ backgroundColor: Colors.border_purple }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea, NwClass.border_purple]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Add this class [border_purple] to the component itself</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_8]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_purple}
                                            lookupStyle={{ backgroundColor: Colors.border_purple }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_purple}
                                            lookupStyle={{ backgroundColor: Colors.border_purple }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea, NwClass.border_purple]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_purple]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* ------ */}
                    {/* Dark Orange BORDER */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Add this class [border_darkorange] to the component itself</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_8]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkorange}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_orange }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkorange}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_orange }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea, NwClass.border_darkorange]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Add this class [border_darkorange] to the component itself</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_8]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkorange}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_orange }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkorange}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_orange }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea, NwClass.border_darkorange]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkorange]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* ------ */}
                    {/* Dark Blue BORDER */}
                    <Div style={[NwClass.row, NwClass.row_parent]}>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Add this class [border_darkblue] to the component itself</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_8]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkblue}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_blue }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkblue}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_blue }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea, NwClass.border_darkblue]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Add this class [border_darkblue] to the component itself</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_8]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkblue}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_blue }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                            style={NwClass.border_darkblue}
                                            lookupStyle={{ backgroundColor: Colors.border_dark_blue }}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea, NwClass.border_darkblue]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox, NwClass.border_darkblue]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* ------ */}
                    {/* Normal BORDER */}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <Div style={[NwClass.row,]}>
                                <Div style={[NwClass.col, NwClass.col_5,]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox,]}
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
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea,]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div style={[NwClass.col, NwClass.col_6, NwClass.col_parent, NwClass.padding_x_15]}>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_6]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_4]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox,]}
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
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textbox</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkLookUp
                                            customClick={() => props.navigation.navigate('Look Up')}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Textarea</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkTextInput
                                            style={[NwClass.txtbox, NwClass.txtarea,]}
                                            numberOfLines={3}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Date</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                            <Div style={NwClass.row}>
                                <Div style={[NwClass.col, NwClass.col_5]}>
                                    <Text style={NwClass.label}>Time</Text>
                                </Div>
                                <Div style={[NwClass.col, NwClass.col_7, NwClass.inlineBlockBtn]}>
                                    <Div style={[NwClass.col, NwClass.col_12]}>
                                        <NkDatePicker
                                            style={[NwClass.txtbox,]}
                                        />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    {/* ------ */}
                    {/* Diskette Icon */}
                    <Div style={[NwClass.row, NwClass.row_parent,]}>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <NkDiskette
                                imageUri={require('../assets/disketteIcon.png')}
                            />
                        </Div>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <NkDiskette
                                imageUri={require('../assets/disketteIcon.png')}
                            />
                        </Div>
                        <Div style={[NwClass.col_4, NwClass.col_parent, NwClass.padding_x_15,]}>
                            <NkDiskette
                                imageUri={require('../assets/disketteIcon.png')}
                            />
                        </Div>
                    </Div>
                    {/* ------ */}




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
        alignItems: 'center'
    },



});

export default DemoScreen
