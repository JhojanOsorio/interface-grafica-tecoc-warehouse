import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuClient from './MenuClient'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TableClient() {

    const [show, setShow] = useState(false);

  const [showD, setShowD] = useState(false);
  const handleCloseD = () => setShowD(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowD = () => setShowD(true);

    const [ListClient, setListClient] = useState([]);
    useEffect(()=>{

        
        const GetAllClients = async () =>{
            const url = "https://localhost:44378/api/Clients";
            const result = await axios.get(url);
            console.log(result.data);
            setListClient(result.data);
        }

        GetAllClients();
    }, [])

    const colums = [
        {
            name : '',
            selector: row => <a  onClick={handleShow}   className='btn btn-primary'><FaIcons.FaEdit/></a>
             
        },
        {
            name : '',
            selector: row => <a onClick={handleShowD}  className='btn btn-danger'><FaIcons.FaTrash/></a> 
        },
        {
            name : 'Nombre',
            selector: row => row.names
        },
        {
            name : 'Apellido',
            selector: row => row.lastNames
        },
        {
            name : 'Posición',
            selector: row => row.poisition
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
                        <h3>Lista de Clientes<FaIcons.FaBox/></h3> 
                    </div>
                    <div className="card-body"> 
                        <MenuClient/>
                        <DataTable className='table table-responsive'
                        columns={colums}
                        data={ListClient}
                        pagination 
                        paginationComponentOptions={paginationOptions}   
                        /> 
                    </div>
                </div>        
            </div>
        </div>




        {/* Modal para Insertar cliente */}

        <Modal className='ModalEditClient'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      ><div className='TitleModalEditClient'>
           <Modal.Header   closeButton>
          <Modal.Title >Editar cliente</Modal.Title>
          </Modal.Header>
     </div>
        
        <Modal.Body className='ModalBodyEditClient'>
        <form>
            
            <div className="form-group  fw-bolder mt-4">
              <label for="formGroupExampleInput ">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder=""
              ></input>
            </div>
            <div class="form-group fw-bolder">
              <label for="formGroupExampleInput2 ">Apellido</label>
              <input
                type="text"
                className="form-control"
      
                name="name"
                id="formGroupExampleInput2"
                placeholder=""
              ></input>
            </div>
            <div className="form-group fw-bolder">
              <label for="formGroupExampleInput2  ">Cargo</label>
              <input
                type="text"
                className="form-control"
                name="description"
   
                id="formGroupExampleInput2"
                placeholder=""
              ></input>
            </div>
            <div className="form-group fw-bolder">
              <label for="formGroupExampleInput2">Identificación</label>
              <input
                type="text"
                className="form-control"
                name="serial"
                id="formGroupExampleInput2"
            
                placeholder=""
              ></input>
            </div>
            
            
    </form>
        </Modal.Body>
        <Modal.Footer className='ModalFooterEditClient'>
        <Button
            id="closeClient"
            variant="primary"
            className="fw-bolder"
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            id="SaveClient"
            variant="primary"
            
            className=" fw-bolder"
          >
            Guardar cambios
          </Button>
            
        </Modal.Footer>
      </Modal>

 {/* Modal para eliminar  cliente */}

 <Modal className='ModalDeleteClient'
        show={showD}
        onHide={handleCloseD}
        backdrop="static"
        keyboard={false}
      ><div className='ModalHeaderDeleteClient'>
           <Modal.Header   closeButton>
          <Modal.Title className='ModalTitleDelete'>¿Está Seguro De Que Desea Eliminar Este Cliente?</Modal.Title>
          </Modal.Header>
     </div>
        
       
        <Modal.Footer className='ModalFooterDeleteClient'>
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

export default TableClient