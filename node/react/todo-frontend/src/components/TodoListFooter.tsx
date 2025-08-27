import React from 'react';

const TodoListFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-5 py-4 bg-light border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0 text-muted">
              &copy; {currentYear} Todo App. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <span className="text-muted">v1.0.0</span>
            <a href="#" className="text-decoration-none text-muted ms-3">
              Privacy Policy
            </a>
            <a href="#" className="text-decoration-none text-muted ms-3">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TodoListFooter;