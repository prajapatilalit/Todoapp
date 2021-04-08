import React, { useState } from "react";
import TodoForm from "../toDoForm/ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo);
  };

  return (
    <div>
      <h1>What is your plan </h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default ToDoList;
