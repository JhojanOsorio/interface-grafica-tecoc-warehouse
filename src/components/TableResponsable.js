import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuResponsable from './MenuResponsable'

function TableResponsable() {
    const [ListResponsable, setListResponsable] = useState([]);
    useEffect(()=>{
        const GetAllProducts = async () =>{
            const url = "https://localhost:44378/api/Responsable";
            const result = await axios.get(url);
            console.log(result.data);
            setListResponsable(result.data);
        }

        GetAllProducts();
    }, [])

    const colums = [
        {
            name : '',
            selector: row => <a className='btn btn-primary'><FaIcons.FaEdit/></a>
             
        },
        {
            name : '',
            selector: row => <a className='btn btn-danger'><FaIcons.FaTrash/></a> 
        },
        {
            name : 'Nombre',
            selector: row => row.name
        },
        {
            name : 'Apellido',
            selector: row => row.lastname
        },
        {
            name : 'Posición',
            selector: row => row.position
        },
        {
            name : 'Identificación',
            selector: row => row.identificationCard
        },
    ]

    const paginationOptions = {
        rowsPerPageText: 'Filas por Página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }


  return (
    <div>
        <br/>
        <div className='row'>
            <div className='col'>
                <div class="card">   
                    <div className="card-header">
                        <h3>Lista de Responsables<FaIcons.FaBox/></h3> 
                    </div>
                    <div className="card-body"> 
                        <MenuResponsable/>
                        <DataTable className='table table-responsive'
                        columns={colums}
                        data={ListResponsable}
                        pagination 
                        paginationComponentOptions={paginationOptions}   
                        /> 
                    </div>
                </div>        
            </div>
        </div>
    </div>
  )
}

export default TableResponsable