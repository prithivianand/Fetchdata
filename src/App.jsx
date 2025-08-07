import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Comment from "./Component/Comment";
import Todo from "./Component/Todo";
import Post from "./Component/Post";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main role="main" className="container mt-5 pt-5">
          <div className="starter-template mb-4">
            <Link to="/post" className="btn btn-outline-success btn-lg me-4">
              Posts
            </Link>
            <Link
              to="/comments"
              className="btn btn-outline-warning btn-lg me-4"
            >
              Comments
            </Link>
            <Link to="/todos" className="btn btn-outline-primary btn-lg me-4">
              Todos
            </Link>
          </div>
          <br />
          <br />
          <hr />
          <Routes>
            <Route path="/post" element={<Post />} />
            <Route path="/comments" element={<Comment />} />
            <Route path="/todos" element={<Todo />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
