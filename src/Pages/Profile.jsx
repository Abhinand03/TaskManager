import React from 'react'
import Sidebar from '../components/Sidebar'
import './pro.css'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const userdetails=JSON.parse(sessionStorage.getItem("user"))
  console.log(userdetails);
  const navigte=useNavigate()

  const handlelogout=()=>{
    sessionStorage.clear()
    navigte('/')


  }
  

  return (
    <>
      <Sidebar />
      <div className='profile'>
        <div className='pro-cont'>
          <h2 className='text-center mt-2'>User Details</h2>
          <div className='mt-5'>

            <h5>Username:{userdetails.username}</h5>
            <h5>Email:{userdetails.email}</h5>
            
          </div>
          <button className='btn btn-danger mt-4 ms-3' onClick={handlelogout}><i class="fa-solid fa-right-from-bracket me-3"></i>Log out</button>
        </div>
      </div>

    </>
  )
}

export default Profile