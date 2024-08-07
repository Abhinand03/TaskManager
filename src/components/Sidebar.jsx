import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Style.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button  className="d-md-none side-btn" onClick={handleShow}>
                <i className="fa-solid fa-bars"></i>
            </Button>



            <Offcanvas show={show}  onHide={handleClose} responsive="md" >
                <Offcanvas.Header closeButton>
                    <h1><i className="fa-solid fa-bars-progress me-3"></i>Task Manager</h1>
                </Offcanvas.Header>
                <Offcanvas.Body className='side-main'>
                    <div className='sidebar-body'>
                        <h2 className='side-head'><i className="fa-solid fa-bars-progress me-3"></i>Task Manager</h2>
                        <div className='sidebar-body2 '>

                            <Link to={'/'} className='side-sec'>Tasks</Link>
                            
                            <Link to={'/add'} className='side-sec'>Add New Task</Link>
                            <Link to={'/profile'} className='side-sec'>Profile</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default Sidebar