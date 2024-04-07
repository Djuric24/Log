import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const Register = ({setCurrentPage}) => {
    // da li mogu da se uvezu kao setcurrent i kako?
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const apiUrl = "http://localhost:3000";

    const userInput = (event) => {
        const newUser = event.target.value;
        setUserName(newUser);
    }
    const passwordInput = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }
    const register = async (e) => {
    e.preventDefault();
    console.log('sending data', userName, password);
    if(!userName || !password) {
    alert('Please fill in username and password');
    return;
    }
    let newUser = {
     username : userName,
     password : password
    }
    let res = await axios.post(apiUrl+"/register",newUser);
    setCurrentPage("login");
    alert(res.data.message);
   } 
  
  return (
    <div>
        <form className="form">
         <p className="title">Register </p>
         <p className="message">Register now and get full access to our app. </p>
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
            <button className="submit" onClick={(e) => {register(e)}}>Register</button>
         </div>
         <div></div>
         <div className="flex">
            <button className="submit" onClick={() => {setCurrentPage("login")}}>Already registered</button>
         </div>
      </form>
    </div>
  )
}
