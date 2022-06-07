import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuUser from './MenuUser'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
            selector: row => <a className='btn btn-danger'><FaIcons.FaTrash/></a> 
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

        <Modal classname='ModalR'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        ><div classname='TitleModalR'> 
            <Modal.Header closeButton>
        <Modal.Title>Editar este  Usuario</Modal.Title>
      </Modal.Header>

      </div>
         
          <Modal.Body className='BodyModalR'  >
            <div  className > 
            <form>
            
                  <div className="form-group  fw-bolder mt-4">
                    <label for="formGroupExampleInput ">Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    ></input>
                  </div>
                  <div class="form-group fw-bolder">
                    <label for="formGroupExampleInput2 ">Contraseña</label>
                    <input
                      type="text"
                      className="form-control"
            
                      name="name"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                 
                  
                  
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
        
    </div>
  )
}

export default TableUser