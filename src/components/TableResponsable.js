import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuResponsable from './MenuResponsable'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function TableResponsable() {
    
    const [show, setShow] = useState(false);

    const [showD, setShowD] = useState(false);
    const handleCloseD = () => setShowD(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowD = () => setShowD(true);

     
    const [ListResponsable, setListResponsable] = useState([]);
    useEffect(()=>{
        const GetAllResponsables = async () =>{
            const url = "https://localhost:44378/api/Responsable";
            const result = await axios.get(url);
            console.log(result.data);
            setListResponsable(result.data);
        }

        GetAllResponsables();
    }, [])

    const colums = [
        {
            name : '',
            selector: row => <a  onClick={handleShow} className='btn btn-primary'><FaIcons.FaEdit/></a>
             
        },
        {
            name : '',
            selector: row => <a className='btn btn-danger'><FaIcons.FaTrash/></a> 
        },
        {
            name : 'Nombre',
            selector: row => row.name
        },
        {
            name : 'Apellido',
            selector: row => row.lastName
        },
        {
            name : 'Posición',
            selector: row => row.position
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
                        <h3>Lista de Responsables<FaIcons.FaBox/></h3> 
                    </div>
                    <div className="card-body"> 
                        <MenuResponsable/>
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
        <Modal 
          classname='ModalR'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        ><div classname='TitleModalR'> 
            <Modal.Header closeButton>
        <Modal.Title>Editar Responsable</Modal.Title>
      </Modal.Header>

      </div>
         
          <Modal.Body className='BodyModalR'  >
            <div  className > 
            <form>
            
                  <div className="form-group  fw-bolder mt-4">
                    <label for="formGroupExampleInput ">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name='name'
                     
                      id="formGroupExampleInput"
                      placeholder=""
                    ></input>
                  </div>
                  <div class="form-group fw-bolder">
                    <label for="formGroupExampleInput2 ">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                   
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2  ">Cargo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="position"
            
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Identificación</label>
                    <input
                      type="text"
                      className="form-control"
                      name="identificationCard"
                     
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  
                  
          </form>
           </div>
            
          </Modal.Body>
          <Modal.Footer className='FooterModalR'>
            <Button variant="primary" onClick={handleClose} >
              Cancelar
            </Button>
            <Button variant="primary" >
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>


{/* Modal para eliminar responsable */}

<Modal className='ModalDeleteResponsable'
        show={showD}
        onHide={handleCloseD}
        backdrop="static"
        keyboard={false}
      ><div className='ModalHeaderDeleteResponsable'>
           <Modal.Header   closeButton>
          <Modal.Title className='ModalTitleDeleteResponsable'>¿Está Seguro De Que Desea Eliminar Este ?</Modal.Title>
          </Modal.Header>
     </div>
        
       
        <Modal.Footer className='ModalFooterDeleteResponsable'>
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

export default TableResponsable