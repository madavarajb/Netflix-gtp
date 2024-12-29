import React, { useRef, useState } from 'react'
import {ImageLinks} from '../Images/ImageLinks'
import Header from './Header'
import { Formvalidation } from '../Utils/Validation'

const Login = () => {
  const email=useRef(null);
  const password=useRef(null);
  const [issignin,setissignin]=useState(true);
  const [errormessage,seterrormessage]=useState();
   
    // const phoneno=useRef(null);

  const togglebutton=()=>{
    setissignin(!issignin);
  }
  const onsubmit=()=>{
    const message=Formvalidation(email.current.value,password.current.value);
    seterrormessage(message);
  }

  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src={ImageLinks.Banner} alt='banner'/>   
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
          <h1 className='text-3xl font-bold py-4'>
            {issignin ? "Sign In" : "Sign Up"}
          </h1>
          {!issignin &&( <input type='text' placeholder='Enter Phone Number' className='p-2 my-2 w-full bg-gray-700'/>)}

          <input ref={email} type='email' placeholder='Enter Email' className='p-2 my-2 w-full bg-gray-700'/>
          <input ref={password} type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
          <p className='font-semibold text-red-500'>
            {errormessage}
          </p>
            <button onClick={onsubmit} className=" p-2 my-4 w-full bg-red-700">
              {issignin ? "Sign In" : "Sign Up"}
            </button>
            <p className='font-bold cursor-pointer ' onClick={togglebutton}>{issignin ? "New to Filmiflixx? Sign up" : "Already member? Sign in"}</p>
        </form>   
    </div>
  )
}

export default Login