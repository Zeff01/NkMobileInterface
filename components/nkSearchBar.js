import React,{useState} from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Colors from '../constants/Colors';

const NkSearchBar = props => {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
        placeholder={props.placeholder}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={[styles.searchBar, props.style]}
    />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        borderColor: Colors.black,
        borderWidth: 1,
        elevation: .3,
    },
});

export default NkSearchBar
