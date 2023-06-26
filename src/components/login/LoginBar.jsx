import "./loginbar.css";
import avatar from "../../../svgs/avatar.svg";
import { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
        console.log({
            ...user,
            [name]:value
        })
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const login = () =>{
        const {email, password} = user
        if(email && password){
            if(email.match(validRegex)){
                axios.post("http://localhost:8000/login", user)
                .then((res)=>{
                    if(res.data=="True"){console.log("Success")}
                    else if(res.data=="False"){toast.error("Email or Password is incorrect", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });}
                })
            }
        }
    }

    return(
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
            <div className="loginbar">
                <img src= {avatar} alt="Avatar"/>
                <input type="text" placeholder="Enter Email " name="email" value={user.email} onChange={handleChange}></input> 
                <input type="text" placeholder="Enter Password " name="password" value={user.password} onChange={handleChange}></input> 
                <button onClick={login}>Login</button>
                <p>Don't have an account? <span className="signup">Sign Up</span></p>
            </div>
        </>
    );
}

export default Loginbar;