import React from 'react'
import "./registerbar.css"
import {useState} from 'react';
import avatar from "../../../svgs/avatar.svg";

function Registerbar() {

    const [ user, setUser]=useState({
        fname:"",
        email:"",
        verify:"",
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



  return (
    <>
      <div className="registerbar">
        <h1>TradeHive</h1>
        <div className="headline">
            <img src= {avatar} alt="Avatar"/>
            <p>Welcome to <span className="head2">TradeHive</span><br/>Sign Up today to start trading!</p>
        </div>

        <div className="form">
            <div className="verify">
                <div className="left">
                    <input type="text" placeholder="Full Name" name="fname" value={user.fname} onChange={handleChange}></input>
                </div>
                <div className="right">
                    <div className="topverify">
                        <input type="email" placeholder="Email Address" name="email" value={user.email} onChange={handleChange}></input>    
                        <button type="button">Send</button>                  
                    </div>
                    <div className="bottomverify">
                        <input type="text" placeholder="Verify Code" name="verify" value={user.verify} onChange={handleChange}></input>
                        <button type="button">Verify</button> 
                    </div>
                </div>
            </div>

            <div className="submit">
                <input type="text" placeholder="Password" name="password" value={user.password} onChange={handleChange}></input> 
                <input type="text" placeholder="Confirm Password" name="cnfpassword" value={user.cnfpassword} onChange={handleChange}></input> 
                <button>Register</button>
                <p>Already have an account? <span className="login">Login</span></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Registerbar;