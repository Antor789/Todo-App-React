import React, { useState } from 'react';
import style from './newtodo.module.css';

const NewTodo = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    desc: ""
  });

  const { title, desc } = todo;

  const HandleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => ({
      ...oldTodo,
      [name]: e.target.value
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || desc.trim() === "") {
      alert("Please fill in both fields!");
      return;
    }

    props.onAddTodo(todo);

   
    setTodo({
      title: "",
      desc: ""
    });
  };

  return (
    <form className={style.form} onSubmit={HandleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={HandleChange}
        />
      </div>

      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea
          id="desc"
          name="desc"
          value={desc}
          onChange={HandleChange}
        />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
