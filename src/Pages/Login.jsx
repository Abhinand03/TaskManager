import React, { useState } from 'react'
import './log.css'
import { login, register } from '../services/Api'
import Swal from 'sweetalert2'
import validator from 'validator';
import { useNavigate } from 'react-router-dom'



function Login() {

    const [status, setstatus] = useState(false)
    const [userdata, setuserdata] = useState({
        username: "", password: "", email: ''
    })
    const [emailerror, setemileror] = useState("")
    const handlestatus = () => {
        setstatus(!status)
    }
    const navigate = useNavigate()



    //email validation
    const emailvalid = (e) => {
        const res = e.target.value
        if (validator.isEmail(res)) {
            setuserdata({ ...userdata, email: e.target.value })
            setemileror('')
        }
        else {
            setemileror("Plese give valid Email")
        }
    }


    //User register function
    const handleregister = async () => {
        const { username, password, email } = userdata
        if (username && password && email) {

            const result = await register(userdata)
            console.log(result);
            if (result.status == 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User registration Successfully completed",
                    showConfirmButton: false,
                    timer: 2000
                });
                setstatus(!status)

            }
            else {
                Swal.fire(result.response.data)
            }
        }
        else {
            Swal.fire("Please fill all feild")

        }

    }

    const handllogin = async () => {
        const result = await login(userdata)

        if(result.status==200)
        {
            
            if (result.data.token) {
                console.log(result.data);
                sessionStorage.setItem("userId",result.data.userId)
                sessionStorage.setItem('user',JSON.stringify(result.data.userDetails))
                sessionStorage.setItem('token',result.data.token)
                
    
                navigate('/dash')
            }

        }
        else{
            Swal.fire("Invalid email/password")
        }
    }
    return (
        <>
            <div className='auth-main'>
                <div className='auth-main2 '>
                    {
                        status ?
                            <h1 className='text-center mt-2 '>Register</h1>
                            :
                            <h1 className='text-center mt-2 '>Login</h1>
                    }
                    <div className='inp-auth mt-5'>
                        <div>

                            <input placeholder="Enter Your Email" onChange={(e) => { emailvalid(e) }} type="email" name="text" className="auth-input mb-2"></input>
                            <p className='email-err'>{emailerror}</p>
                        </div>
                        <input placeholder="Enter Your Password" onChange={(e) => { setuserdata({ ...userdata, password: e.target.value }) }} type="password" name="text" className="auth-input mb-3"></input>
                        {
                            status &&
                            <input placeholder="Enter Your Username" onChange={(e) => { setuserdata({ ...userdata, username: e.target.value }) }} type="text" name="text" className="auth-input mb-3"></input>

                        }
                    </div>
                    <div className='btn-div'>
                        {
                            status ?
                                <button className=' auth-btn' onClick={handleregister}>Register</button>
                                :
                                <button className=' auth-btn' onClick={handllogin}>login</button>
                        }

                        <p onClick={handlestatus} className='text-center mt-2 text-secondary'>{status ? <span className='text-primary'>Already Have Account</span> : <span className='text-white'> Not Registered ? <span className='text-primary'>Create An Account</span></span>}</p>
                    </div>
                    <p className='text-center'>or</p>



                </div>


            </div>
        </>
    )
}

export default Login