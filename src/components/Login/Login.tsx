import { register } from 'module';
import React from 'react';
import { useState } from 'react';

export const Login = ({setCurrentPage}) => {
    const apiUrl = "http://localhost:3000";
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

     const userInput = (event) => {
        const newUser = event.target.value;
        setUserName(newUser);
    }
    const passwordInput = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }

  return (
    <div>
        <form className="form">
         <p className="title">Log in </p>
         <p className="message">Log in now and get full access to our app. </p>
         <div className="flex">
         <label>
         <input className="input" value={userName} onChange={userInput} type="text" placeholder="" />
             <span>Firstname</span>
         </label>
         </div>  
         <div className="flex">
             <label>
             <input className="input" value={password} onChange={passwordInput} type="password" placeholder="" />
               <span>Password</span>
             </label>   
         </div>
         <div className="flex">
            <button className="submit" onClick={() => {setCurrentPage("home")}}>Log in</button>
         </div>
         <div className="flex">
            <button className="submit" onClick={() => {setCurrentPage("register")}}>Register</button>
         </div>
      </form>
    </div>
  )
}
