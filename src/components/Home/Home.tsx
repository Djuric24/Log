import React, { useState } from 'react';
import axios from 'axios';

export const Home = ({setCurrentPage, currentUser, setCurrentUser}) => {
      const apiUrl = "http://localhost:3000";
      const [text, setText] = useState('');
      const [customerId, setCustomerId] = useState('');
      const [isEditing, setIsEditing] = useState(false);
      const [editID, setEditID] = useState(null);

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
     let res = await axios.post(apiUrl+"/createtodo",newTodo);
      let updatedTodos = res.data.user.Todos;
      console.log(updatedTodos);
       setText('');
       setIsEditing(false);
       setCurrentUser((prev) => ({
    ...prev,
    todos: updatedTodos
  }));
 
  }
  const deleteTodo = async (id) => {
     await axios.post(apiUrl+"/deletetodo",{id : id});
       setCurrentUser(prev => ({
    ...prev,
    todos: prev.todos.filter(todo => todo.id !== id)
  }));
  }
  const editTodo = async (id, newText) => {
    const res = await axios.post(apiUrl+"/edittodo",{id, text : newText});
    let editedTodo = res.data.todo;
    console.log(editedTodo);
    setIsEditing(true);
    setEditID(id);
     setText(res.data.todo.title);


  //   const editItem = (id) => {
  // const specificItem = list.find((item)=> item.id === id);
  // setIsEditing(true);
  // setEditID(id);
  // setName(specificItem.title);
  
  }
  return (
    <>
     <div className='navbar'>
      <h4>Welcome: {currentUser.username} </h4>
      <button onClick={() => {setCurrentPage("login");setCurrentUser(null)}}>Log out</button>
     </div>

    <div className='home'>
      <h3>Your todos are :</h3>
      <div className='todos'>
      {currentUser.todos.map((todo) => {
        return (
          <div className='singletodo' key={todo.id}>
            <p>- {todo.text}</p>
            <button className='deleteTodo' onClick={() => deleteTodo(todo.id)}>Delete</button>
             <button className='deleteTodo' onClick={()=> editTodo(todo.id)}>Edit</button>
          </div>
        )
      })}
      </div>
      <input type="text" onChange={handleTextChange} value={text} className='inputTodo' placeholder='Enter new todo' />
      <button onClick={handleAddTodo}>{isEditing? 'edit' : 'submit'}</button>
    </div>
    </>
  )
}   
