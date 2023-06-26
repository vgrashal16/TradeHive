import React, { useReducer } from 'react'
import "./registerbar.css"
import {useState} from 'react';
import logo_white from "../../../svgs/logo_white.svg"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Registerbar() {

    const [ user, setUser]=useState({
        fname:"",
        email:"",    
        password:"",
        cnfpassword:""
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
        console.log({
            ...user,
            [name]: value
        })
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const register = () =>{
        const {fname, email, password, cnfpassword} = user
        if(fname && email && password && cnfpassword){
            if(email.match(validRegex)){
                if(password == cnfpassword){
                    
                    axios.post("http://localhost:8000/register", user)
                    .then ((res)=>{if (res.data == "False"){
                        toast.error("User already registered", {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    }
                })}
                else{
                    toast.error("Passwords do not match", {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            }
            else{
                toast.error("Email Address should be of form \'someone@example.com\'", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
        else{
            toast.error("Please input all fields!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }


  return (
    <>
        <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
        />
      <div className="registerbar">
        <div className="headline">
            <img src= {logo_white} alt="logo"/>
            
        </div>

        <div className="form">
            <p>Register below to start trading!</p>
            <input type="text" placeholder="Full Name" name="fname" value={user.fname} onChange={handleChange}></input>
            <input typpe="text" placeholder="Email Address" name="email" value={user.email} onChange={handleChange}></input>
            <input type="text" placeholder="Password" name="password" value={user.password} onChange={handleChange}></input> 
            <input type="text" placeholder="Confirm Password" name="cnfpassword" value={user.cnfpassword} onChange={handleChange}></input> 
            <button onClick={register}>Register</button>
            <p2>Already have an account? <span className="login">Login</span></p2>       
        </div>
        </div>
    </>
  )
}

export default Registerbar;