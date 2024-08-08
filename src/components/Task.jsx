import React, { useContext, useEffect, useState } from 'react'
import "./task.css"
import Edit from './Edit'
import Deatil from './Deatil'
import { delteTask, gettask } from '../services/Api'
import { updateSatus } from '../Context/Context'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'



function Task() {
    const [task, settask] = useState([])
    const [DeltStatus, setDeltStatus] = useState(false)
    const { UPstatus, setUPstatus } = useContext(updateSatus)

    const userid = sessionStorage.getItem('userId')

    const [search,setsearch]=useState({
        userId:userid,search:"" 
    })

    const res= JSON.stringify(search)
    console.log(res);
    
  
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    const navigate=useNavigate()


     //get task by userid
    const handelget = async (userId) => {
        const result = await gettask(userId,header)
        console.log(result)
        if (result.status == 200) {
            settask(result.data)         
        }
        else{
            Swal.fire(result.response.data)
            navigate('/')

        }

    }

    //Delete task
    const handeldelt = async (id) => {
        const result = await delteTask(id)
        console.log(result);
        setDeltStatus(!DeltStatus)
        Swal.fire({
            title: "Deleted!",
            text: "Your Task has been deleted.",
            icon: "error"
        });


    }
    
    useEffect(() => {

        handelget(res)

    }, [UPstatus, DeltStatus,search])
    return (
        <>
        <div className='ser-div mb-4 '>
                <input type="text" className='inp-ser' onChange={(e)=>{setsearch({...search,search:e.target.value})}} placeholder='Search your task..' />
            </div>
            <div className='d-felx'>

                <div className='d-flex flex-wrap task-main'>
                    {
                        task.length > 0 ?
                            task.map((item) => (

                                <div className='task-body'>

                                    <div>
                                        <h3>{item?.heading}</h3>
                                        <p>{item?.message} </p>
                                        <div className='d-flex'>
                                            <p className='me-4'>Status: {item.status == "Pending" ? <span className='bg-warning badge'>{item?.status}</span> : <span className='bg-success badge'>{item?.status}</span>} </p>
                                            <p>Due Date:{item?.deadline}</p>

                                        </div>

                                    </div>
                                    <div className='d-flex justify-content-evenly'>
                                        <Edit props={item} />
                                        <Deatil item={item} />
                                        <button onClick={() => { handeldelt(item._id) }} className='btn'> <i className="fa-lg fa-solid fa-trash" style={{ color: " #d10000" }}></i></button>

                                    </div>
                                </div>
                            )) :
                            <div className='mt-5 ms-5'>

                                <h1 className='ms-5 mt-5 p-3 text-danger'>Let's start by adding your task.</h1>

                            </div>


                    }
                </div>
            </div>
        </>
    )
}

export default Task