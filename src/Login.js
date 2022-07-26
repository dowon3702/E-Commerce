import React, { useState } from 'react';
import './Login.css';
import{Link, useHistory} from "react-router-dom";
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const signIn = e =>{e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{history.push('/')})
        .catch(error=>alert(error.message))
    }
    const register= e =>{e.preventDefault(); 
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{console.log(auth);
        if(auth){
            history.push('/')
        }
        })

        .catch(error => alert(error.message))
    } 
const[email,setEmail] =useState('');
const[password,setPassword] =useState('');
  return (
    <div className='login'>
        <Link to ='/'>
       <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1025px-Amazon_logo.svg.png' alt=''/>
       </Link>
       <div className='login_con'>
           <h1>Sign-in</h1>

           <form>
             <h5>E-Mail</h5>
            <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className='login_inB'>Sign In</button>
           </form>

           <p>
               By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
           </p>
             

             <button onClick={register} className='login_createB'>Create your Amazon Account</button>
       </div>


    </div>
    
  )
}

export default Login