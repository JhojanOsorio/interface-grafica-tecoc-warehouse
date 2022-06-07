import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuProduct from './MenuProduct'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  



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
           <Modal.Header   closeButton>
          <Modal.Title className='EditHeaderProduct'>Editar producto</Modal.Title>
          </Modal.Header>
     </div>
        
        <Modal.Body className='ModalBodyEdit'>
        <form>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col  ">
                  <div className="form-group  fw-bolder mt-4">
                    <label for="formGroupExampleInput ">Código</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    ></input>
                  </div>
                  <div class="form-group fw-bolder">
                    <label for="formGroupExampleInput2 ">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2  ">Descripción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Serial</label>
                    <input
                      type="text"
                      className="form-control"
                      name="serial"
                      id="formGroupExampleInput2"
                     
                      placeholder=""
                    ></input>
                  </div>
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
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Modelo</label>
                    <input
                      type="text"
                      name="model"
                      
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                </div>
                <div className="col">
                  <div class="form-group fw-bolder mt-4">
                    <label for="formGroupExampleInput">Responsable</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Lugar</label>
                    <input
                      type="text"
                      name="place"
                     
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Condición</label>
                    <input
                      type="text"
                      name="condition"
                      
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Cantidad</label>
                    <input
                      type="text"
                      name="amount"
                     
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Valor</label>
                    <input
                      type="text"
                      className="form-control"
                      name="totalValue"
                     
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Observaciones</label>
                    <input
                      type="text"
                      className="form-control"
                      name="observations"
                    
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Último pedido</label>
                    <input
                      type="date"
                      name="lastOrder"
                     
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
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
           <Modal.Header   closeButton>
          <Modal.Title className='ModalTitleDelete'>¿Está Seguro De Que Desea Eliminar Este Producto?</Modal.Title>
          </Modal.Header>
     </div>
        
       
        <Modal.Footer className='ModalFooterDelete'>
        <Button
            id="Not"
            variant="primary"
            className="fw-bolder"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            id="yes"
            variant="primary"
            onClick={handleClose}
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