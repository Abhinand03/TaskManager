import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './add.css'

function AddTask() {
  return (
    <>
      <div className='add-sec-main'>
        <div className='mt-5 add-sec shadow '>

          <h2>Add Your Task</h2>
          <div>
            <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments" className='mb-3'>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <label>Select Date to Done
              <br />
              <input type="date" className='add-date' name="" id="" />
            </label>
            <div className='d-grid mt-4'>
              <button className='btn btn-primary'>Submit</button>
              
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default AddTask