import React, { useState } from "react";
import Todo from "../toDo/ToDo";
import TodoForm from "../toDoForm/ToDoForm";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  //Add todo
  const addTodo = (todo) => {
    // check the space between the word

    if (!todo.text || /^\*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo);
  };

  const updateTodo = (todoId, newValue) => {
    // check the space between the word
    if (!newValue.text || /^\*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // Remove todo
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  //mark as completed todo
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's Your Plan </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default ToDoList;
