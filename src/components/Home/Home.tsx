import React from 'react'

export const Home = ({setCurrentPage, currentUser}) => {
  console.log(currentUser);
  return (
    <div>
        <h1>You are home</h1>
        <h3>{currentUser.todos}</h3>
        <button onClick={() => (setCurrentPage("login"))} >Log out</button>
    </div>
  )
}   


