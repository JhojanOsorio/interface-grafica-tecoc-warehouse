
import Button from 'react-bootstrap/Button';
import * as FaIcons from "react-icons/fa";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";



function Example() {
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
            <Modal.Header closeButton>
        <Modal.Title>Igresa un nuevo responsable</Modal.Title>
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
    
  export default Example;