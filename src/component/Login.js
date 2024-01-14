import React from 'react'
import Mail from '../icon/Mail'
import Password from '../icon/Password'

const Login = () => {

  return (
    <>
      <div className='text'>
      Log in
      </div>
      <div className='text1'>
      Welcome! Please enter your credentials to continue.
      </div>
      <div className='text3'>
      Enter your email address
    </div>
      <div>
      <input className='input' placeholder='majhar@gmail.com' />
          <Mail/>
      </div>
      <div className='text3'>
      Enter your password
    </div>
    <div>
    <input className='input' placeholder='*********' />
          <Password/>
    </div>
   
   <div style={{ display:'flex'}}>
   <input type="checkbox"  />
    <p className='remember'>Remember me</p>
    </div> 
    <div className='button'>
    <button className='login'>
        Log in
    </button>
    </div>
    </>
  )
}

export default Login
