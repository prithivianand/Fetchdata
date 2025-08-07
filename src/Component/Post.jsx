import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>POST</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts ? (
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
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
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
