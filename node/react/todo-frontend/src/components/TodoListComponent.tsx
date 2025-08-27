import React, { useEffect, useState } from "react";
import type { Todo } from "../model/Todo";
import { getAllTodos, deleteTodo, markAsDone, makeAsUnDone } from "../service/TodoService";
import { Link } from "react-router-dom";

export default function TodoListComponent() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAllTodos();
        handleDelete(1);
        handleCheck(1, true);
    }, []);

    const fetchAllTodos = () => {
        setLoading(true);
        getAllTodos()
            .then((res) => {
                setTodos(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const handleDelete = (id: number) => {
        deleteTodo(id)
            .then(() => {
                // after delete, refresh the list
                fetchAllTodos();
            })
            .catch((err) => console.log(err));
    };

    const handleCheck = (id: number, done: boolean) => {
        if (done) {
            markAsDone(id)
                .then(() => fetchAllTodos())
                .catch((err) => console.log(err));
        } else {
            makeAsUnDone(id)
                .then(() => fetchAllTodos())
                .catch((err) => console.log(err));
        }
    };

    const handleCompleted = (id: number) => {
        markAsDone(id)
            .then(() => fetchAllTodos())
            .catch((err) => console.log(err));
    }

    const handleUnCompleted = (id: number) => {
        makeAsUnDone(id)
            .then(() => fetchAllTodos())
            .catch((err) => console.log(err));
    }


    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Todo List</h1>

            {loading ? (
                <h4>Loading...</h4>
            ) : (
                <div>
                    <Link to="/add-todo" className="btn btn-primary my-3">
                        Add Todo
                    </Link>

                    <table className="table table-striped table-bordered shadow">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Is Completed</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.done ? "Completed ✅" : "Not Completed ❌"}</td>
                                    <td>
                                        <input onChange={(e) => handleCheck(todo.id!, e.target.checked)} className="form-check-input mx-2" type="checkbox"  checked={todo.done}/>
                                        
                                        <button className="btn btn-outline-primary mx-2" onClick={() => handleCompleted(todo.id!)}>
                                            Completed
                                        </button>
                                        <button className="btn btn-outline-success mx-2"  onClick={() => handleUnCompleted(todo.id!)}>
                                            UnCompleted
                                        </button>
                                        <Link
                                            to={`/edit-todo/${todo.id}`}
                                            className="btn btn-secondary mx-2"
                                            state={todo}
                                        >
                                            Update
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => handleDelete(todo.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
