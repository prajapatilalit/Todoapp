import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo_form-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo_btn edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a ToDo"
            value={input}
            name="text"
            className="todo_form-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo_btn">add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
