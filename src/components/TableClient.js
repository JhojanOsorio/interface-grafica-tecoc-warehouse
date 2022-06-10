import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuClient from './MenuClient'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemModal from "./ItemModal";

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
                        <h3>Lista de clientes  <FaIcons.FaUsers/></h3> 
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
           <Modal.Header   className='BackgroundHeaderEdit'>
          <Modal.Title  className=' animate__animated animate__flipInX'>Editar cliente</Modal.Title>
          </Modal.Header>
     </div>
        
        <Modal.Body className='ModalBodyEditClient'>
        <form>
            
        <ItemModal Title="Nombre" />
              <ItemModal Title="Apellido" />
              <ItemModal Title="Cargo" />
              <ItemModal Title="Identificación" />
            
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
           <Modal.Header >
          <Modal.Title className='ModalTitleDelete  animate__animated animate__flipInX'>¿Está seguro de que desea eliminar este cliente?</Modal.Title>
          </Modal.Header>
     </div>
        
       
        <Modal.Footer className='ModalFooterDeleteClient'>
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

export default TableClient