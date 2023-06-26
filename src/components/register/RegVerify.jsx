import React from 'react'
import "./regverify.css"
import logo_white from "../../../svgs/logo_white.svg"
import mail from "../../../svgs/mail.svg"
import {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function RegVerify() {

    const [code, setCode] = new useState({
        otp: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setCode({[name]: value})
        // console.log({[name]: value})
    }

    const submit = () =>{
        const otp = code.otp
        axios.post("http://localhost:8000/code", otp)
        .then ((res)=>{if (res.data == "False"){
            toast.error("Wrong code entered", {
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
        else{console.log("Success")}
    })
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
        <div className="regverify">
            <div className="regheader">
                <img src= {logo_white} alt="Logo"/>
            </div>
            <div className="otp">
                <img src= {mail} alt="Logo"/>
                <p>A 6 digit OTP has been sent to your email address for verification. Enter OTP below to verify</p>
                <input type="text" placeholder="Enter 6 Digit OTP" name="otp" value={code.otp} onChange={handleChange}></input>
                <button onClick={submit}>Verify</button>
            </div>
        </div>
    </>
  )
}
