import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component';
import * as FaIcons from "react-icons/fa";
import MenuResponsable from './MenuResponsible'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemModal from "./ItemModal";


function TableResponsible() {
    
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
            selector: row => <a  onClick={handleShowD} className='btn btn-danger'><FaIcons.FaTrash/></a> 
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
                        <h3>Lista de Responsables  <FaIcons.FaUser/></h3> 
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
            <Modal.Header className='BackgroundHeaderEdit' >
        <Modal.Title className=' animate__animated animate__flipInX'>Editar Responsable</Modal.Title>
      </Modal.Header>

      </div>
         
          <Modal.Body className='BodyModalR'  >
            <div  className > 
            <form>
            
            <ItemModal title="Nombre" />
              <ItemModal title="Apellido" />
              <ItemModal title="Cargo" />
              <ItemModal title="Identificación" />
                  
                  
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
           <Modal.Header  className='ModalTitleDeleteResponsable'>
          <Modal.Title className='ModalTitleDeleteResponsable  animate__animated animate__flipInX'>¿Esta seguro de que desea eliminar este responsable?</Modal.Title>
          </Modal.Header>
     </div>
        
       
        <Modal.Footer className='ModalFooterDeleteResponsable'>
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

export default TableResponsible