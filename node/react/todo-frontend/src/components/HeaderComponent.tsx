import React from "react";
import { FcTodoList } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white p-4">
        <Link to="/" className="navbar-brand">
          <FcTodoList size={30} /> Todo App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Content
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}