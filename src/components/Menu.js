import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateProduct from "./Modal";
  
function Example() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
  <div className="container">
<div className="row"  >
      <div className="col ">
      <div className="col  ">
            <Button variant="btn btn-success  btn-lg"  onClick={handleShow}>
                    Nuevo
           </Button>
           </div>
     </div>
</div>
</div>  

 <ModalCreateProduct isShow={setShow} show={show}/>    
  
    
    </>
  );
}
  
export default Example;