import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import * as FaIcons from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import axios from "axios";



function Example() {

  const [data, setData]=useState([]);
  const [gestoreseleccionado, setGestorseleccionado]= useState({
    name:'',
    lastName:'',
    position: '',
    identificationCard: '',
    
  })

  const peticionPost=async()=>{
 
    const baseUrl = "https://localhost:44378/api/products";
    await axios.post(baseUrl, gestoreseleccionado)
    .then(response=>{
      setData(data.concat(response.data));
    }).catch(error=>{
      console.log(error)
    })  }
  
  const handleChange=e=>{
    const {name, value}=e.target;
    setGestorseleccionado({...gestoreseleccionado, [name]: value});
    console.log(gestoreseleccionado)

  
  }


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
    
        <Modal 
          classname='ModalR'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        ><div classname='TitleModalR'> 
            <Modal.Header className="BackgroundHeader" >
        <Modal.Title className="text-white fw-bolder    animate__animated animate__flipInX">Igresa un nuevo Responsable</Modal.Title>
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
                      onchange={handleChange}
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
                      onchange={handleChange}
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
                      onchange={handleChange}
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
                      onchange={handleChange}
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
            <Button variant="primary" onClick={()=>peticionPost }>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
    
  export default Example;