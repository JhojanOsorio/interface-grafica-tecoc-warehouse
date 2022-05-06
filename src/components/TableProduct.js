import React from 'react'

function TableProduct() {
  return (
    <div className='row'>
        <div className='col'>
            <table className="table">
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
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                    <th>1</th>
                    
                    <td>Escoba</td>
                    <td>Tiburon</td>
                    <td>12345</td>
                    <td>Antioquia</td>
                    <td>Antioquia</td>
                    <td>Enseres</td>
                    <td></td>
                    <td>Manuel</td>
                    <td>Bodega</td>
                    <td>Buena</td>
                    <td>3</td>
                    <td>8.000</td>
                    <td>Ninguna</td>
                    <td><a className='btn btn-success'>Editar</a></td>
                    <td><a className='btn btn-danger'>Editar</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableProduct