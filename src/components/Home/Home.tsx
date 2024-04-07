import React from 'react'

export const Home = ({setCurrentPage}) => {
  return (
    <div>
        <h1>You are home</h1>
        <button onClick={() => (setCurrentPage("login"))} >Log out</button>
    </div>
  )
}
