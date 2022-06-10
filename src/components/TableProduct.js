import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuProduct from './MenuProduct'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemModal from "./ItemModal"
  



function TableProduct01() {
    const [show, setShow] = useState(false);

  const [showD, setShowD] = useState(false);
  const handleCloseD = () => setShowD(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowD = () => setShowD(true);
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
            selector: row => <a onClick={handleShow}     className='btn btn-primary'><FaIcons.FaEdit/></a>
             
        },
        {
            name : '',
            selector: row => <a  onClick={handleShowD}  className='btn btn-danger'><FaIcons.FaTrash/></a>
        },
        {
            name : 'Código',
            selector: row => row.code
        },
        {
            name : 'Nombre Producto',
            selector: row => row.name
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
            selector: row => row.idDepartament
        },
        {
            name : 'Municipio',
            selector: row => row.idMunicipality
        },
        {
            name : 'Tipo',
            selector: row => row.idType
        },
        {
            name : 'Modelo',
            selector: row => row.model
        },
        {
            name : 'Responsable',
            selector: row => row.idResponsable
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



        {/* Modal para Insertar */}

        <Modal className='ModalEdit'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      ><div className='TitleModalEditProduct'>
           <Modal.Header >
          <Modal.Title className='EditHeaderProduct   animate__animated animate__flipInX'>Editar producto</Modal.Title>
          </Modal.Header>
     </div>
        
        <Modal.Body className='ModalBodyEdit'>
        <form>
        <div className="container">
              <div className="row row-cols-2">
                <div className="col  ">
                  <ItemModal title="Código" />
                  <ItemModal title="Nombre" />
                  <ItemModal title="Descripcion" />
                  <ItemModal title="Serial" />
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Departamento</label>

                    <select
                      className="form-select"
                      name="idDepartament"
                      aria-label="Default select example"
                    >
                      <option selected>Selecciona el departamento</option>
                      <option value="1">Antioquia</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Municipio</label>

                    <select
                      className="form-select"
                      name="idMunicipality"
                      aria-label="Default select example"
                    >
                      <option selected>Selecciona el municipio</option>
                      <option value="1">SantaFe</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <ItemModal title="Modelo" />
                </div>
                <div className="col">
                  <ItemModal title="Responsable" />
                  <ItemModal title="Condición" />
                  <ItemModal title="Cantidad" />
                  <ItemModal title="Valor" />
                  <ItemModal title="Observaciones" />
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Último pedido</label>
                    <input
                      type="date"
                      name="lastOrder"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    />
                  </div>
                  
                <div className="form-group fw-bolder">
                  <label for="formGroupExampleInput2">Foto</label>
                  <input
                    type="file"
                    id="customFile  "
                    className="btn btn-primary custom-file-input"
                  ></input>
                </div>
                </div>

              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button
            id="cerrar"
            variant="primary"
            className="fw-bolder"
            onClick={handleClose}
          >
            Cancelar cambios
          </Button>
          <Button
            id="guardar"
            variant="primary"
            
            className=" fw-bolder"
          >
            Guardar cambios
          </Button>
            
        </Modal.Footer>
      </Modal>

        {/* Modal para eliminar */}

        <Modal className='ModalDelete'
        show={showD}
        onHide={handleCloseD}
        backdrop="static"
        keyboard={false}
      ><div className='ModalHeaderDelete'>
           <Modal.Header  >
          <Modal.Title className='ModalTitleDelete   animate__animated animate__flipInX'>¿Está Seguro De Que Desea Eliminar Este Producto?</Modal.Title>
          </Modal.Header>
     </div>
        
       
        <Modal.Footer className='ModalFooterDelete'>
        <Button
            id="Not"
            variant="primary"
            className="fw-bolder"
            onClick={handleCloseD}
          >
            No
          </Button>
          <Button
            id="yes"
            variant="primary"
            onClick={handleCloseD}
            className=" fw-bolder"
          >
            Si
          </Button>
            
        </Modal.Footer>
      </Modal>
  
      
    </div>

  )
}

export default TableProduct01