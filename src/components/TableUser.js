import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuUser from './MenuUser'


function TableUser() {
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
            name : 'Usuario',
            selector: row => row.name
        },
        {
            name : 'Contraseña',
            selector: row => row.lastname
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
                        <h3>Lista de Usuarios<FaIcons.FaBox/></h3> 
                    </div>
                    <div className="card-body"> 
                        <MenuUser/>
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

export default TableUser