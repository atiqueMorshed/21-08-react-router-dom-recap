import React from "react";
import { withRouter } from "react-router-dom";

const Post = ({ history, match, location }) => {
  console.log("history: ", history);
  console.log("match: ", match);
  console.log("location: ", location);
  return (
    <div>
      <h1>Post ID: {match.params.id}</h1>
    </div>
  );
};

export default withRouter(Post);
