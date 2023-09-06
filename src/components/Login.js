import './Login.css';
import image1 from '../assets/image1.png'
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { useAlert } from "react-alert";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const alert = useAlert();
 
    useEffect(()=>{
        if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
            navigate("/");
        }
        console.log(localStorage.getItem('token'))
    },[])
 
    const loginAction = (e) => {
        e.preventDefault();
        let payload = {
            email:email,
            password:password,
        }
        axios.post('https://reqres.in/api/login', payload)
        .then((r) => {
            localStorage.setItem('token', r.data.token)
            navigate("/users");
        })
        .catch((e) => {
            console.log(e);
            alert.error("Fill out email and password");
        });
    }
    return (
        <div class="container d-flex justify-content-center align-items-center min-vh-100">
   
       <div class="row border rounded-5 p-3 bg-white shadow box-area">
       <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" styles="background: #103cbe;">
           <div class="featured-image mb-3">
            <img src={image1} class="img-fluid" styles="width: 250px;" />
           </div>
           <p class="text-black fs-2" styles="font-family: 'Courier New', Courier, monospace; font-weight: 600;">Verified yourself</p>
           <small class="text-black text-wrap text-center" styles="width: 17rem;font-family: 'Courier New', Courier, monospace;">Join the experiences on this platform.</small>
       </div> 
        
       <div class="col-md-6 right-box">
          <div class="row align-items-center">
                <div class="header-text mb-4">
                     <h2>Hello,</h2>
                     <p>We are happy to have you back.</p>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control form-control-lg bg-light fs-6" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email address" />
                </div>
                <div class="input-group mb-1">
                    <input type="password" class="form-control form-control-lg bg-light fs-6" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                </div>
                <div class="input-group mb-5 d-flex justify-content-between">

                </div>
                <div class="input-group mb-3">
                    <button 
                        type="submit"
                        class="btn btn-lg btn-primary w-100 fs-6"
                        onClick={(e)=>{loginAction(e)}}>Login
                    </button>
                </div>
                <div class="row">
                    <small>Don't have account? <a href="/register">Sign Up</a></small>
                </div>
          </div>
       </div> 
      </div>
    </div>
    )
}

export default Login;