import React from "react";
import { useParams, withRouter } from "react-router-dom";

const Post = () => {
  const params = useParams();
  console.log("useParams: ", params);
  return (
    <div>
      <h1>Post ID: {params.id}</h1>
    </div>
  );
};

export default withRouter(Post);

// The withRouter HOC way:
/**
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
 */
