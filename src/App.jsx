import React, { useState } from "react";
import './App.css'; 
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
export const App = () => {
    const [currentPage, setCurrentPage] = useState("login");   
    const [currentUser, setCurrentUser] = useState({}); 

if(currentPage === "login"){
    return <Login setCurrentPage={setCurrentPage} setCurrentUser={setCurrentUser} ></Login>
}
if(currentPage === "register") {
    return <Register setCurrentPage={setCurrentPage} ></Register>
}
if(currentPage === "home") {
    return <Home setCurrentPage={setCurrentPage} currentUser={currentUser}></Home>
}
}

export default App;