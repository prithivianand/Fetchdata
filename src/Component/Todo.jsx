import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Todo</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Todo ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos ? (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
                <td>
                  <button className="btn btn-primary me-2">
                    <FontAwesomeIcon icon={faEdit} className="me-1" />
                    Edit
                  </button>
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrash} className="me-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
