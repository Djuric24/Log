import React, { useState } from 'react';
import axios from 'axios';

export const Home = ({setCurrentPage, currentUser}) => {
      const apiUrl = "http://localhost:3000";
      const [text, setText] = useState('');
      const [customerId, setCustomerId] = useState('');

      const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
      }
//delete todo
// poslati id od todoa koji kliknes , (ne userid)

  const handleAddTodo = async () => {
     let newTodo = {
     text : text,
     id : currentUser.userId,
    }

    console.log("novi todo koji saljem na bekend",newTodo)
     let todo = await axios.post(apiUrl+"/createtodo",newTodo);
    console.log("response" ,todo.data);
      //podatke sa bekenda da budu tretni podaci(currentuser)
        setText('');
        // alert('You created new Todo');

      console.log('clicked');
    
  }
  const deleteTodo = () => {
    console.log('delete');
    
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
            <button className='deleteTodo' onClick={deleteTodo}>Delete</button>
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
