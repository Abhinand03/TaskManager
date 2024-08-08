import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './add.css'
import { addtask } from '../services/Api';
import Swal from 'sweetalert2';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const user_id= sessionStorage.getItem('userId')
  
  const [data,setdata]=useState({
    heading:'',message:'',deadline:'',status:"Pending",userId:user_id
  })
  
  const navigate=useNavigate()
  
  const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

  //add Task
  const handlesubmit=async()=>{
      if(data.heading || data.message)
    {
      const result= await addtask(data,header)
      console.log(result);
      if(result.status==200){
        setdata({
          heading:'',message:'',deadline:''
        })
        Swal.fire(
          {
            title: "Task Asigned Successfully",
            icon: "success"
          }
        )
      }
    }
    else{
      Swal.fire(result.response.data)
      navigate('/')

  }
    

  }
  
  return (
    <>
    <Sidebar/>

      <div className='add-sec-main'>
        <div className='mt-5 add-sec shadow '>

          <h2>Add Your Task</h2>
          <div>
            <FloatingLabel controlId="floatingPassword" label="Task Headig" className='mb-3'>
              <Form.Control type="text" value={data.heading} onChange={(e)=>{setdata({...data,heading:e.target.value})}} placeholder="Task Heading" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Task Details" className='mb-3'>
              <Form.Control
                as="textarea"
                placeholder="Task Details "
                style={{ height: '100px' }}
                value={data.message}
                onChange={(e)=>{setdata({...data,message:e.target.value})}}
              />
            </FloatingLabel>
            <label>Select Date to Done
              <br />
              <input type="date" value={data.deadline} onChange={(e)=>setdata({...data,deadline:e.target.value})} className='add-date' name="" id="" />
            </label>
            <div className='d-grid mt-4'>
              <button className='btn btn-primary' onClick={handlesubmit}>Submit</button>
              
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default AddTask