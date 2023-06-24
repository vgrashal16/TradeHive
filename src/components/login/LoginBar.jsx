import "./loginbar.css";
import avatar from "../../../svgs/avatar.svg";

import { useState } from 'react';

function Loginbar(){

    const [ user, setUser]=useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    return(
        <>
            <div className="loginbar">
                <img src= {avatar} alt="Avatar"/>
                <input type="text" placeholder="Enter Email " name="email" value={user.email} onChange={handleChange}></input> 
                <input type="text" placeholder="Enter Password " name="password" value={user.password} onChange={handleChange}></input> 
                <button>Login</button>
                <p>Don't have an account? <span className="signup">Sign Up</span></p>
            </div>
        </>
    );
}

export default Loginbar;