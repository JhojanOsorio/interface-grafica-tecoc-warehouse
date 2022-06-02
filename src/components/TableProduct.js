import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuProduct from './MenuProduct'



function TableProduct01() {
    const [ListProduct, setListProduct] = useState([]);
    useEffect(()=>{
        const GetAllProducts = async () =>{
            const url = "https://localhost:44378/api/products";
            const result = await axios.get(url);
            console.log(result.data);
            setListProduct(result.data);
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
            name : 'Código',
            selector: row => row.code
        },
        {
            name : 'Nombre Producto',
            selector: row => row.nameProduct
        },
        {
            name : 'Descripción',
            selector: row => row.description
        },
        {
            name : 'Serial',
            selector: row => row.serial
        },
        {
            name : 'Departamento',
            selector: row => row.departament
        },
        {
            name : 'Municipio',
            selector: row => row.municipality
        },
        {
            name : 'Tipo',
            selector: row => row.typeProduct
        },
        {
            name : 'Modelo',
            selector: row => row.model
        },
        {
            name : 'Responsable',
            selector: row => row.responsible
        },
        {
            name : 'Lugar',
            selector: row => row.place
        },
        {
            name : 'Condición',
            selector: row => row.condition
        },
        {
            name : 'Cantidad',
            selector: row => row.amount
        },
        {
            name : 'Valor',
            selector: row => '$' + row.totalValue
        },
        {
            name : 'Observaciones',
            selector: row => row.observations
        },
        {
            name : 'último Pedido',
            selector: row => row.lastOrder
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
                        <h3>Lista de Productos <FaIcons.FaBox/></h3> 
                    </div>
                    <div className="card-body"> 
                        <MenuProduct/>
                        <DataTable className='table table-responsive'
                        columns={colums}
                        data={ListProduct}
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

export default TableProduct01