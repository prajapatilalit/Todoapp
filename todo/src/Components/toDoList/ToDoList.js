import React, { useState } from "react";
import Todo from "../toDo/ToDo";
import TodoForm from "../toDoForm/ToDoForm";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  //Add todo
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo);
  };

  const updateTodo = (todoId, newValue) => {
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
  //reset all todo in the list

  const resetTodo = () => {
    setTodos([]);
  };

  return (
    <div>
      <div className="r-btn">
        <button onClick={resetTodo} className="reset-button">
          Reset
        </button>
      </div>

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
