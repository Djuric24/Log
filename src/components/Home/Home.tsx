import React from 'react'

export const Home = ({setCurrentPage, currentUser}) => {
  return (
    <div className='home'>
      <div className='nav'>
        <h2>Welcome: { currentUser.username} </h2>
        <button onClick={() => (setCurrentPage("login"))} >Log out</button>
      </div>
        <h3>Your todos are :</h3>
        {currentUser.todos.map((todo) => {
          return (
          <div key={todo.id}>
            <p>- {todo.text}</p>
          </div>
          )
        })}   
    </div>
  )
}   
