import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TableProduct() {
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
  return (
    <div className='row'>
        <div className='col'>
            <table className="table table-xl-responsive">
                <thead className="thead-dark">
                    <tr>
                   
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Serial</th>
                            <th>Departamento</th>
                            <th>Municipio</th>
                            <th>Tipo</th>
                            <th>Modelo</th>
                            <th>Responsable</th>
                            <th>Lugar</th>
                            <th>Condición</th>
                            <th>Cantidad</th>
                            <th>Valor</th>
                            <th>Obserbaciones</th>
                            <th>Útimo Pedido</th>
                            <th></th>
                            <th></th>
                        </tr>
                </thead>
                <tbody>
                    {
                        ListProduct.map((item,i)=>(
                            <tr>
                    
                                <th>{item.code}</th>                               
                                <td>{item.nameProduct}</td>
                                <td>{item.description}</td>
                                <td>{item.serial}</td>
                                <td>{item.departament}</td>
                                <td>{item.municipality}</td>
                                <td>{item.typeProduct}</td>
                                <td>{item.model}</td>
                                <td>{item.responsible}</td>
                                <td>{item.place}</td>
                                <td>{item.condition}</td>
                                <td>{item.amount}</td>
                                <td>${item.totalValue}</td>
                                <td>{item.observations}</td>
                                <td>{item.lastOrder}</td>
                                <td><a className='btn btn-success'>Editar</a></td>
                                <td><a className='btn btn-danger'>Editar</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableProduct