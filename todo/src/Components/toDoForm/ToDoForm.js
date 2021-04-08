import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a ToDo"
        value={input}
        name="text"
        className="todo_form-input"
        onChange={handleChange}
      />
      <button className="todo_btn">add Todo</button>
    </form>
  );
}

export default TodoForm;
