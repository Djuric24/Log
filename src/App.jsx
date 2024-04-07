import React, { useState } from "react";
import './App.css'; 
import axios from "axios";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
export const App = () => {
    const [currentPage, setCurrentPage] = useState("login");    

if(currentPage === "login"){
    return <Login setCurrentPage={setCurrentPage} ></Login>
}
if(currentPage === "register") {
    return <Register setCurrentPage={setCurrentPage} ></Register>
}
if(currentPage === "home") {
    return <Home setCurrentPage={setCurrentPage}></Home>
}
}

export default App;