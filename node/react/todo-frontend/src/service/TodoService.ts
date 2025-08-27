import axios from "axios"
import type { TodoRequest } from "../model/TodoRequest";
import type { Todo } from "../model/Todo";

const TODO_BACKEND_URL='http://localhost:8080/api/todos'

export const getAllTodos = () =>
    axios.get(TODO_BACKEND_URL);

export const createTodo = (todo:TodoRequest) =>
    axios.post<Todo>(TODO_BACKEND_URL,todo);

// Update todo (e.g., mark as done)
export const markAsDone = (id: number) => {
  return axios.put(`${TODO_BACKEND_URL}/${id}/complete`);
}

export const makeAsUnDone = (id: number) => {
  return axios.put(`${TODO_BACKEND_URL}/${id}/uncomplete`);
}

export const updateTodo = (id: number, todo: TodoRequest) => {
  return axios.put(`${TODO_BACKEND_URL}/${id}`, todo);
}


// ✅ Delete todo
export const deleteTodo = (id: number) => {
  return axios.delete(`${TODO_BACKEND_URL}/${id}`);
};



