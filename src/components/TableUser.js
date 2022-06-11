import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuUser from './MenuUser'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemModal from "./ItemModal";


function TableUser() {

    const [show, setShow] = useState(false);

    const [showD, setShowD] = useState(false);
    const handleCloseD = () => setShowD(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowD = () => setShowD(true);



    const [ListUsers, setListUsers] = useState([]);
    useEffect(()=>{
        const GetAllUsers = async () =>{
            const url = "https://localhost:44378/api/Users";
            const result = await axios.get(url);
            console.log(result.data);
            setListUsers(result.data);
        }

        GetAllUsers();
    }, [])

    const colums = [
        {
            name : '',
            selector: row =>  <a   onClick={handleShow} className='btn btn-primary'><FaIcons.FaEdit/></a>
             
        },
        {
            name : '',
            selector: row => <a  onClick={handleShowD}className='btn btn-danger'><FaIcons.FaTrash/></a> 
        },
        {
            name : 'Usuario',
            selector: row => row.userName
        },
        {
            name : 'Contraseña',
            selector: row => row.password
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
                        data={ListUsers}
                        pagination 
                        paginationComponentOptions={paginationOptions}   
                        /> 
                    </div>
                </div>        
            </div>
        </div>

        <Modal classname='ModalR '
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        ><div classname='TitleModalR'> 
            <Modal.Header  className='BackgroundHeaderEdit'>
        <Modal.Title className=' animate__animated animate__flipInX'>Editar este  Usuario</Modal.Title>
      </Modal.Header>

      </div>
         
          <Modal.Body className='BodyModalR'  >
            <div  className > 
            <form>
            <ItemModal title="Usuario" />
            <ItemModal title="Contraseña" />
                 
                  
             
          </form>
           </div>
            
          </Modal.Body>
          <Modal.Footer className='FooterModalR'>
            <Button variant="primary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

         {/* Modal para eliminar */}

         <Modal className='ModalDelete   animate__animated animate__zoomIn animate__faster '
        show={showD}
        onHide={handleCloseD}
        backdrop="static"
        keyboard={false}
      ><div className='ModalHeaderDelete'>
           <Modal.Header >
          <Modal.Title className='ModalTitleDelete  animate__animated animate__flipInX'>¿Esta seguro que desea eliminar  este usuario?</Modal.Title>
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

export default TableUser