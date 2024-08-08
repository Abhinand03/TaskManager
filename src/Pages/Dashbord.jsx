import React from 'react'
import Sidebar from '../components/Sidebar'
import Task from '../components/Task'
import './dash.css'

function Dashbord() {
    return (
        <>
            <Sidebar />
            <div className='d-flex'>
                <div className=''>
                    <Task />
                </div>

            </div>

        </>
    )
}

export default Dashbord