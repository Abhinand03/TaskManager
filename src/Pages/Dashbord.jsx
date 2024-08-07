import React from 'react'
import Sidebar from '../components/Sidebar'
import Task from '../components/Task'
import './dash.css'

function Dashbord() {
    return (
        <>
            <div className='d-flex'>
                
                <div className='d-flex flex-wrap task-main'>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />

                </div>

            </div>

        </>
    )
}

export default Dashbord