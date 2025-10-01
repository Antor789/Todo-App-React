import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo';


export const Home = () => {

const[todos,setTodos]=useState([]);

const HandleTodo=(todo)=>{
setTodos(prevTodos=>{
  return[...prevTodos,{id:uuidv4(), ...todo}];
});
}

const HandleRemoveTodo=(id)=>{
 const filterdTodos=todos.filter((todo)=>todo.id !== id);
 setTodos((prevTodos)=>{
  const filterdTodos=prevTodos.filter((todo)=>todo.id !== id);
  return filterdTodos;
 });
}



  return (
    <div className={style.container}>
        <h1 style={{ color: 'white' }}>Todo App</h1>
        <NewTodo onAddTodo={HandleTodo} />
        <Todos todos={todos} onRemoveTodo={HandleRemoveTodo} />
    </div>
  )
}
