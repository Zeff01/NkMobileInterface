import React, {useState} from 'react'
import { Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';


const optionsPerPage = [2, 3, 4];
//Hello
const NkGrid = props => {

    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable style={styles.tableContainer}>
      <DataTable.Header >
        <DataTable.Title ><Text style={props.textHeaderStyle}>Dessert</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={props.textHeaderStyle}>Calories</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={props.textHeaderStyle}>Fat</Text></DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell ><Text style={props.textStyle}>Frozen yogurt</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>159</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>6.0</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={props.textStyle}>Ice cream sandwich</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>237</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>8.0</Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell><Text style={props.textStyle}>Chocolate</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>400</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>15</Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell><Text style={props.textStyle}>Donut</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>550</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={props.textStyle}>5.0</Text></DataTable.Cell>
      </DataTable.Row>


      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
     
      />
    </DataTable>
    )
}

const styles = StyleSheet.create({
    tableContainer:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        borderRadius: 5,
      
    },

});

export default NkGrid
