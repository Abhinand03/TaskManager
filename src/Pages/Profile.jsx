import React from 'react'
import Sidebar from '../components/Sidebar'
import './pro.css'

function Profile() {

  return (
    <>
      <Sidebar />
      <div className='profile'>
        <div className='pro-cont'>
          <h2 className='text-center mt-2'>User Details</h2>
          <div className='mt-5'>

            <h4>user Name</h4>
            <h5>email Adress:</h5>
            <h5 className='mt-3'>Task count :</h5>
          </div>
          <button className='btn btn-danger mt-4'><i class="fa-solid fa-right-from-bracket me-3"></i>Log out</button>
        </div>
      </div>

    </>
  )
}

export default Profile