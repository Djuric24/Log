import React, { useState } from "react";
import './App.css'; 
import axios from "axios";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
export const App = () => {
    const [currentPage, setCurrentPage] = useState("login");
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    const apiUrl = "http://localhost:3000";
    

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
    console.log(res);
    setAccess(true);
    //axios.post
    //axios.get
   } 
// if(access === true) {
//     <form className="form">
//         <p className="title">Log in </p>
//         <p className="message">Log in now and get full access to our app. </p>
//         <div className="flex">
//         <label>
//         <input className="input" value={userName} onChange={userInput} type="text" placeholder="" required=""/>
//             <span>Firstname</span>
//         </label>
//         </div>  
//         <div className="flex">
//             <label>
//             <input className="input" value={password} onChange={passwordInput} type="password" placeholder="" required=""/>
//               <span>Password</span>
//             </label>   
//         </div>
//         <div className="flex">
//             <button className="submit" onClick={register}>Sign up</button>
//         </div>
// </form>
// }

// return (
// <form className="form">
//     <p className="title">Register </p>
//     <p className="message">Sign in now and get full access to our app. </p>
//         <div className="flex">
//         <label>
//             <input className="input" value={userName} onChange={userInput} type="text" placeholder="" required=""/>
//             <span>Firstname</span>
//         </label>
//         </div>  
//         <div className="flex">
//             <label>
//             <input className="input" value={password} onChange={passwordInput} type="password" placeholder="" required=""/>
//             <span>Password</span>
//             </label>   
//         </div>
//         <div className="flex">
//             <button className="submit" onClick={register}>Sign in</button>
//         </div>
// </form>
//     )
if(currentPage === "login"){
    return <Login setCurrentPage={setCurrentPage}></Login>
}
if(currentPage === "register") {
    return <Register setCurrentPage={setCurrentPage}></Register>
}
if(currentPage === "home") {
    return <Home setCurrentPage={setCurrentPage}></Home>
}
}

export default App;