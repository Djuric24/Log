import React from 'react';
import { useState } from 'react';

export const Register = ({setCurrentPage, userName, password}) => {
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    const apiUrl = "http://localhost:3000";
    
  return (
    <div>
<button onClick={() => {
    setCurrentPage("login")
}}>Log in</button>

    </div>
  )
}
