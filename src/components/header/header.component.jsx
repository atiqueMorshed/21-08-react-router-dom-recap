import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Header;
