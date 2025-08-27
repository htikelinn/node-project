import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import TodoListComponent from "./components/TodoListComponent";
import TodoFormComponent from "./components/TodoFormComponent";
import TodoListFooter from "./components/TodoListFooter";

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path="/" element={<TodoListComponent />} />
            <Route path="/add-todo" element={<TodoFormComponent />} />
            <Route path="/edit-todo/:id" element={<TodoFormComponent />} />
          </Routes>
          <TodoListFooter/>
      </BrowserRouter>
    </div>
  )
}
