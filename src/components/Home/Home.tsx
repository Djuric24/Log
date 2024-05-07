import React, { useState } from 'react';
import axios from 'axios';

export const Home = ({setCurrentPage, currentUser, setCurrentUser}) => {
      const apiUrl = "http://localhost:3000";
      const [text, setText] = useState('');
      const [customerId, setCustomerId] = useState('');

      const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
      }


  const handleAddTodo = async () => {
     let newTodo = {
     text : text,
     id : currentUser.userId,
    }
    if(!text) {
      alert('Write your todo')
      return;
    }

    console.log("novi todo koji saljem na bekend",newTodo)
     let todo = await axios.post(apiUrl+"/createtodo",newTodo);
        setText('');
      console.log(newTodo);
       setCurrentUser(prev => ({
    ...prev,
    todos: [...prev.todos, newTodo]    
  }));
    console.log('skroz dole', newTodo);
    
  }
  const deleteTodo = async (id) => {
     await axios.post(apiUrl+"/deletetodo",{id : id});
       setCurrentUser(prev => ({
    ...prev,
    todos: prev.todos.filter(todo => todo.id !== id)
  }));
  }
  return (
    <>
     <div className='navbar'>
      <h4>Welcome: {currentUser.username} </h4>
      <button onClick={() => (setCurrentPage("login"))}>Log out</button>
     </div>

    <div className='home'>
      <h3>Your todos are :</h3>
      <div className='todos'>
      {currentUser.todos.map((todo) => {
        return (
          <div className='singletodo' key={todo.id}>
            <p>- {todo.text}</p>
            <button className='deleteTodo' onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        )
      })}
      </div>
      <input type="text" onChange={handleTextChange} value={text} className='inputTodo' placeholder='Enter new todo' />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
    </>
  )
}   
