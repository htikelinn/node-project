import { useState } from "react";
import React from 'react'

export default function TodoList() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const todoHandler = e =>
        setTodo(e.target.value);
    const todoSubmitHandler = () => {
        const todoObj = {
            id: todos.length,
            name: todo
        }

        setTodos([...todos, todoObj]);
        setTodo("");
    };
    return (
        <div>
            <div className='container bg-ligh'>
                <label>Todo</label>
                <input type="text" value={todo} onChange={todoHandler} className='form-control' />
            </div>
            <hr />
            <button className='btn btn-primary' onClick={todoSubmitHandler}>AddTodo</button>
            <br />
            {
                todos.map(todo => (
                    <li key={todo.id}>{todo.name}</li>
                ))
            }
        </div>
    )
}