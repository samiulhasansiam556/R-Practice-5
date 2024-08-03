import React from "react";
import './Todo.css'

function AddTodo(props) {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    props.AddTodo(inputValue);
  };
  const handleAddTodo = () => {
    props.addTodo(inputValue);
    setInputValue("");
  };
  const searchChange = (e) => {
    props.searchTodo(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <label>Search: </label>
        <input type="text" onChange={searchChange} />
      </div>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default AddTodo;
