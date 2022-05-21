import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from "react-bootstrap/Modal";

function ModalCreateProduct({setShow, show}) {
  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Title>
          <h3 className="text-white fw-bolder ">Ingresa el nuevo registro </h3>
        </Modal.Title>

        <Modal.Body>
          <form>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col  ">
                  <div className="form-group  fw-bolder mt-4">
                    <label for="formGroupExampleInput ">Código</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    ></input>
                  </div>
                  <div class="form-group fw-bolder">
                    <label for="formGroupExampleInput2 ">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2  ">Descripción</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Serial</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Departamento</label>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Selecciona el departamento</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Municipio</label>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Selecciona el municipio</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Tipo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Modelo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                </div>
                <div className="col">
                  <div class="form-group fw-bolder mt-4">
                    <label for="formGroupExampleInput">Responsable</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Lugar</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Condición</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Cantidad</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Valor</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Observaciones</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="form-group fw-bolder">
                    <label for="formGroupExampleInput2">Último pedido</label>
                    <input
                      type="date"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder=""
                    ></input>
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
            className="fw-bolder"
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button id="guardar" variant="primary" className=" fw-bolder">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCreateProduct;
