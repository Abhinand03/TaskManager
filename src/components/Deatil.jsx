import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Deatil({ item }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>   <button onClick={handleShow} className='btn'><i class=" fa-lg fa-solid fa-eye" style={{ color: "#01ad2c" }}></i> </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Task Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h1>{item.heading}</h1>
                        <p>{item.message}</p>
                        <p>current Staus:{item.status}</p>
                        <p>Dead Line:{item.deadline}</p>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Deatil