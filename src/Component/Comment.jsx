import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Comment() {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>COMMENTS</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments ? (
            comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
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
