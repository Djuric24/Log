import React, { useState } from "react";
import './App.css'; 
import axios from "axios";
export const App = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const apiUrl = "http://localhost:3111";
    const [access, setAccess] = useState(true);

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
     let res = axios.post(apiUrl+"/savedata",newUser);
     console.log(res);
     setAccess(true);
    //axios.post
    //axios.get
   } 
if(access === true) {
    <form className="form">
        <p className="title">Log in </p>
        <p className="message">Log in now and get full access to our app. </p>
        <div className="flex">
        <label>
        <input className="input" value={userName} onChange={userInput} type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>
        </div>  
        <div className="flex">
            <label>
            <input className="input" value={password} onChange={passwordInput} type="password" placeholder="" required=""/>
              <span>Password</span>
            </label>   
        </div>
        <div className="flex">
            <button className="submit" onClick={register}>Sign up</button>
        </div>
</form>
}

return (
<form className="form">
    <p className="title">Register </p>
    <p className="message">Sign in now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input className="input" value={userName} onChange={userInput} type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>
        </div>  
        <div className="flex">
            <label>
            <input className="input" value={password} onChange={passwordInput} type="password" placeholder="" required=""/>
            <span>Password</span>
            </label>   
        </div>
        <div className="flex">
            <button className="submit" onClick={register}>Sign in</button>
        </div>
</form>
    )
}

export default App;