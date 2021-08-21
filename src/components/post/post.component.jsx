import React from "react";
import { useLocation, useParams, withRouter } from "react-router-dom";

const Post = () => {
  // useParams only gives access to params
  const params = useParams();
  console.log("useParams: ", params);

  //location gives us access to variables in url ie: /posts/001?firstName=Marco&lastName=polo
  const location = useLocation();
  console.log("location: ", location);

  // in console, we can see, location.search gives us ?firstName=Marco&lastName=polo
  //to extract values of variables, we have to use an in build api from browser called URLSearchParams

  const query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <h1>Post ID: {params.id}</h1>
      <p>First Name: {query.get("firstName")}</p>
      <p>Last Name: {query.get("lastName")}</p>
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
