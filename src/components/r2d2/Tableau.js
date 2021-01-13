import MUIDataTable from 'mui-datatables'
import React from 'react'

const Tableau = ({data}) => {

    const colonnes = [
        {name: 'userId',
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return value;
            }
        }}, 
        
        'title'
    ]
    return <MUIDataTable columns ={colonnes} data={data}/>
}

export default Tableau;