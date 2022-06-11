import React from 'react'

function ItemModal({title,name =""})  {
  return (
    <div className="form-group  fw-bolder mt-4">
                    <label for="formGroupExampleInput ">{title}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      name={name}
                    ></input>
                  </div>
  )
}

export default ItemModal