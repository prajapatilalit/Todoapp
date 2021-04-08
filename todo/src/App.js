import React from "react";
import "./App.css";

import ToDoList from "./Components/toDoList/ToDoList";

const App = () => {
  return (
    <div className="todo_app">
      <ToDoList />
    </div>
  );
};

export default App;
