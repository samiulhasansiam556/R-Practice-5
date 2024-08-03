import React, { useState } from 'react';
import './Todo.css';

function Todo(props) {
  const { todo, index, editIndex, deleteTodo, editTodo, saveEditedTodo } = props;
  
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    editTodo(index);
    // setEditedTodo(todo); // Initialize editedTodo with current todo
  }

  const handleChange = (event) => {

       setEditedTodo(event.target.value);
   
  }

  const handleSave = () => {
    if(editedTodo !== ""){
    saveEditedTodo(index, editedTodo);
    }

  }

  const handleCancel = () => {
    editTodo(-1); // Exit edit mode
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {editIndex === index ? (
          <input type="text" value={editedTodo} onChange={handleChange} />
         ) : (
          <span>{todo}</span>
        )}
      </td>
      <td>
        {editIndex === index ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </td>
      <td>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </td>
    </tr>
  );
}

export default Todo;
