import MUIDataTable from 'mui-datatables'
import React from 'react'

const Tableau = ({data}) => {

    const colonnes = [
        
        {name: 'Nom',
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                console.log(tableMeta)
                return `${value.toUpperCase()} -  ${tableMeta.rowData[1]}`;
            }
        }}, 
        
        'classe'
    ]
    return <MUIDataTable columns ={colonnes} data={data}/>
}

export default Tableau;