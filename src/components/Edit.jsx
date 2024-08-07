import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Edit() {
    const [show, setShow] = useState(false);

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
                       


                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit