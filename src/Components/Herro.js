import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import{TfiEmail} from 'react-icons/tfi';
import{SlSocialTwitter} from 'react-icons/sl';
import{AiOutlineLinkedin} from 'react-icons/ai';


function Herro() {
  return (
    <div className='container'>
        <div className='form'>
        <div className='containerWrap'>
            <p>LOGIN</p>
        </div>
        <div className='info'>
            <div className='infowrap'>
                <label>username</label>
            </div>
            <div className='infowrap'>
            <input className='input' placeholder='Type your username'></input>
            </div>

            <div className='infowrap'>
                <label>Password</label>
            </div>
            <div className='infowrap'>
            <input className='input' placeholder='Type your password' type='password'></input>
            </div>


            <div className='info3'>
                <label>Forgotpassword?</label>
            </div>   
            
         
        </div>
        <div className='infowrap'>
            <button className='btn'> LOGIN</button>
        </div> 

         <div className='media' >
            <p> Or Sign Up Using</p>
            <div className='logo' >
         
                <BsFacebook/>
                <TfiEmail/>
                <SlSocialTwitter/>
                <AiOutlineLinkedin/>
            </div>
         </div>
         <div className='media' >
            <p> Or Sign Up Using</p>
            <div className='logo' >        
                Sign Up
            </div>
         </div>
        </div>
    </div>
  )
}

export default Herro;