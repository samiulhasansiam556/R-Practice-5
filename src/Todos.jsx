import React from 'react';
import Todo from './Todo';
import './Todo.css';

function Todos(props) {
  const { Todos, deleteTodo, editTodo, editIndex, saveEditedTodo } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Todo</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            editIndex={editIndex}
            saveEditedTodo={saveEditedTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Todos;
