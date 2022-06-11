import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import * as FaIcons from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import 'animate.css';
import ItemModal from "./ItemModal";

  
function Example() {
  const [show, setShow] = useState(false);
  const [gestorSeleccionado, setGestorSeleccionado] = useState({
    name: '',
    description: '',
    serial: '',
    idType: '',
    idDepartament: 1,
    idMunicipality: 1,
    place: ''

  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange=e=>{

  }
  
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
  
    
         <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Title >
          <h3 className="text-white fw-bolder    animate__animated animate__flipInX">Ingresa el nuevo registro </h3>
        </Modal.Title>

        <Modal.Body>
          <form>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col  ">
                  <ItemModal title="Código" />
                  <ItemModal title="Nombre" />
                  <ItemModal title="Descripción" />
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
            className="fw-bolder  "
            onClick={handleClose}
          >
            Cancelar
          </Button>
          
          <Button
            id="guardar"
            variant="primary"
            
            className=" fw-bolder"
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
</>
  );
}
  
export default Example;