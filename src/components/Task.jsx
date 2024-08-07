import React from 'react'
import "./task.css"
import { Link } from 'react-router-dom'
import Edit from './Edit'

function Task() {
    return (
        <>
            <div>
                <div className='task-body'>

                    <div>
                        <h3>Heading</h3>
                        <p>create the task for do today he task for do today he task for do today </p>
                        <div className='d-flex'>
                            <p className='me-4'>Status: <span className='bg-warning badge'>Pending</span> </p>
                            <p>Due Date:14/5/2024</p>

                        </div>

                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <Edit/>
                        <button  className='btn'><i class=" fa-lg fa-solid fa-eye" style={{ color: "#01ad2c" }}></i> </button>
                        <button className='btn'> <i className="fa-lg fa-solid fa-trash" style={{ color: " #d10000" }}></i></button>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task