import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import * as FaIcons from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import ItemModal from "./ItemModal";




function MenuUser() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <div className="container">
  <div className="row"  >
        <div className="col ">
        <div className="col  ">
              <Button variant="btn btn-success mb-3"  onClick={handleShow}>
                      Nuevo <FaIcons.FaBox/>
             </Button>
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
            <Modal.Header className="BackgroundHeader">
        <Modal.Title className="text-white fw-bolder    animate__animated animate__flipInX">Igresa un nuevo Usuario</Modal.Title>
      </Modal.Header>

      </div>
         
          <Modal.Body className='BodyModalR'  >
            <div  className > 
            <form>
            <ItemModal Title="Usuario" />
            <ItemModal Title="Contraseña" />
                 
                  
             
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
      </>
    );
  }
    
  export default MenuUser;