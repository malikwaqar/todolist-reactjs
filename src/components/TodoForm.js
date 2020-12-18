import React from "react";

function TodoForm({ input, setInput, todos, setTodos, setStatus}) {
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        type="text"
        className="todo-input"
        onChange={handleInput}
      />
      <button className="todo-button" onSubmit={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
