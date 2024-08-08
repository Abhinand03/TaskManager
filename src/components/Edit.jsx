import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updatetask } from '../services/Api';
import { updateSatus } from '../Context/Context';


function Edit({ props }) {
    const [show, setShow] = useState(false);
    const [upDate, setUpdata] = useState({
        heading: props.heading, message: props.message, deadline: props.deadline, status: props.status, task_id: props._id

    })
    const { UPstatus, setUPstatus } = useContext(updateSatus)

    //Edit task function
    const handleedit = async () => {
        const result = await updatetask(upDate)
        console.log(result);
        setUPstatus(!UPstatus)
        handleClose()
    }
   




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>

            <button onClick={handleShow} className='btn'><i className="fa-lg fa-solid fa-pen-to-square" style={{ color: "#053fc7" }}></i> </button>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                            <Form.Control type="text" value={upDate.heading} onChange={(e) => { setUpdata({ ...upDate, heading: e.target.value }) }} placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments" className='mb-3'>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                value={upDate.message}
                                onChange={(e) => { setUpdata({ ...upDate, message: e.target.value }) }}
                            />
                        </FloatingLabel>
                        <div className='d-felx'>

                            <label>Select Date to Done
                                <br />
                                <input type="date" value={upDate.deadline} className='add-date' name="" onChange={(e) => { setUpdata({ ...upDate, message: e.target.value }) }} id="" />
                            </label>
                            <select name="" id="" className='add-date ms-3' onChange={(e) => { setUpdata({ ...upDate, status: e.target.value }) }}>
                                <option> --Select Status ---</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>



                    </div>

                </Modal.Body>
                <Modal.Footer>

                    <Button onClick={handleedit} variant="primary">Update Task </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit