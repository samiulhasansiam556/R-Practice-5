import React, { useState,useEffect } from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';



function App() {

    const [todos, setTodos] = useState(()=>{
    const saveTodos = localStorage.getItem('todos');
    return saveTodos ? JSON.parse(saveTodos):["todo1", "todo2", "todo3"];

  });

  const [filterTerm, setFilterTerm] = useState("");
  const [editIndex, setEditIndex] = useState(-1); 



  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  const addTodo = (todo) => {
    if(todo!==""){
       const newTodos = [...todos, todo];
    setTodos(newTodos);
    } 
  }

  const searchTodo = (value) => {
    setFilterTerm(value);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterTerm.trim() === "") {
      return true;
    } else {
      return todo.toLowerCase().includes(filterTerm.toLowerCase());
    }
  });

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    // Exit edit mode if the edited todo is deleted
    if (editIndex === index) {
      setEditIndex(-1);
    }
  }

  const editTodo = (index) => {
    setEditIndex(index);
  }

  const saveEditedTodo = (index, editedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editedTodo;
    setTodos(updatedTodos);
    setEditIndex(-1); // Exit edit mode after saving
  }

  return (
    <> 
      <h1 style={{
        textAlign: "center",
        color: "red",
        marginBottom: "50px",
        textShadow: "2px 4px 6px blue"
        }}>My Todos</h1>


      <AddTodo addTodo={addTodo} searchTodo={searchTodo} />

      <Todos Todos={filteredTodos} deleteTodo={deleteTodo} 
      editTodo={editTodo} editIndex={editIndex} 
      saveEditedTodo={saveEditedTodo} />  
    </>
  )
}

export default App;
