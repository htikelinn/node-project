import React, { useState } from 'react'
import { createTodo } from '../service/TodoService';
import { useNavigate } from 'react-router-dom';
import type { TodoRequest } from '../model/TodoRequest';

export default function TodoFormComponent() {
    const navigator = useNavigate();
    const [title, setTitle] = useState<string>('');

    const titleHandler = ((e: { target: { value: React.SetStateAction<string>; }; }) => setTitle(e.target.value));

    const todoSubmitHandler = ((e: { preventDefault: () => void; }) => {
            e.preventDefault();
            const todoRequest:TodoRequest = {
                title
            };
            createTodo(todoRequest)
            .then(res =>{ console.log(res.data);
            navigator('/');
        })
        .catch(err => console.log(err));
    })
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 shadow-lg p-3 mb-5 bg-body rounded'>
                <form onSubmit={todoSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" value={title} onChange={titleHandler} className="form-control" id="title" placeholder="Enter title" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}
