import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';
import Div from './div';
import NkCheckbox from './nkCheckbox';

const NkFilterCheckbox = props => {
    const NwClass = useStyles();
    return (
        <Div style={[NwClass.fieldSet, props.style]}>
            <Text style={[NwClass.legend, props.textStyle]}>{props.title}</Text>
            <Div style={NwClass.row}>

                {props.addCheckbox1 && (
                    <NkCheckbox
                        labelRight={props.labelRight}
                        labelLeft={props.labelLeft}
                        labelStyle={props.labelStyle}
                    />
                )}
                {props.addCheckbox2 && (
                    <NkCheckbox
                        labelRight={props.labelRight}
                        labelLeft={props.labelLeft}
                        labelStyle={props.labelStyle}
                    />
                )}
                {props.addCheckbox3 && (
                    <NkCheckbox
                        labelRight={props.labelRight}
                        labelLeft={props.labelLeft}
                        labelStyle={props.labelStyle}
                    />
                )}

            </Div>
        </Div>
    )
}

const styles = StyleSheet.create({


});
export default NkFilterCheckbox
