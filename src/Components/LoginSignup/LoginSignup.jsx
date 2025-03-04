import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export default function LoginSignup() {
    const[action, setAction]= useState("Sign Up");
    const handleSignUp = ()=>{
        setAction('Sign Up');
    }
    const handleLogin = ()=>{
        setAction('Login');
    }
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login'?<div></div>
        :
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        }
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-container">
        <div className={action === 'Login'?'submit gray':'submit' } onClick={handleSignUp}>SignUp</div>
        <div className={action === 'Sign Up'?'submit gray':'submit'} onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
}
