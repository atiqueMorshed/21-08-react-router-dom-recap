import React from "react";
import { Link } from "react-router-dom";

import "./posts.styles.css";

const Posts = () => {
  return (
    <div className="posts">
      <Link to="/posts/001">Post 01</Link>
      <Link to="/posts/002">Post 02</Link>
      <Link to="/posts/003">Post 03</Link>
    </div>
  );
};

export default Posts;
