import React, { useState } from 'react';
import './loginSignUp.css';
import name_icon from '../assets/person.svg'
import email_icon from '../assets/email.svg'
import password_icon from '../assets/password.svg'
const LoginSignUp = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className='container flex flex-col w-[600px] m-auto mt-[0px] pb-[30px]'>
      <div className="header flex flex-col items-center gap-2 w-full mt-[30px]">
        <div className="text text-[#3c009d] text-5xl font-bold">{action}</div>
        <div className="underline w-[61px] h-[6px] bg-[#3c009d] rounded-[9px] mt-[10px]"></div>
      </div>
      <form action="">
      <div className="inputs mt-[55px] flex flex-col gap-[25px]">
        {action==="Login"?<div></div>:
        <div className="input flex">
        <img src={name_icon} alt="" />
        <input type="text" placeholder='Name' />
        </div>}
        <div className="input flex">
        <img src={email_icon} alt="" />
        <input type="email" placeholder='Email'/>
        </div>
        <div className="input flex">
        <img src={password_icon} alt="" />
        <input type="password" placeholder='Password' />
        </div>
      </div>
      </form>
      {action==="Sign Up"?<div></div>:
      <div className="forgot-password pl-[62px] mt-[27px] text-[#797979] text-lg">Frogot Password? <span className='text-[#4c00b4] cursor-pointer'>click here!</span></div>}
      <div className='submit-container flex gap-[30px]'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp
