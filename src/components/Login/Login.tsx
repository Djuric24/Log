import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const Login = ({setCurrentPage, setCurrentUser}) => {
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

    const login = async (e) => {
      e.preventDefault();
    const credentials = {
      username : userName,
      password : password
    }  
    if(!userName || !password) {
      alert("Username or password can't be empty")
      return;
    }

    let res = await axios.post(apiUrl+"/login",credentials);
    console.log("response" ,res);
    if(res.data.message === "User found") {
      setCurrentUser(res.data);
      alert('You loged in succesfully');
      setCurrentPage("home");
    } else if(res.data.message === "Wrong credentials") {
      alert("Your username or password isn't right");
      return;
    }
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
            <button className="submit" onClick={(e) => {login(e)}}>Log in</button>
         </div>
         <div></div>
         <div className="flex">
            <button className="submit" onClick={() => {setCurrentPage("register")}}>Register</button>
         </div>
      </form>
    </div>
  )
}
