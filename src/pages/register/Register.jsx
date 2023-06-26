import React from 'react'
import "./register.css"
import Registerbar from "../../components/register/Registerbar.jsx"
import RegVerify from '../../components/register/RegVerify';

function Register() {
  return (
    <>
    <div className="register">
        <div className="leftcontent">
            <Registerbar/>
            {/* <RegVerify/> */}
        </div>
        <div className="rightcontent">
            
        </div>
    </div>
    </>
  )
}

export default Register;
