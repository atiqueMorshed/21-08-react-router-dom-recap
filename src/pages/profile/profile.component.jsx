import React, { useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  Link,
  useRouteMatch,
} from "react-router-dom";
import EditProfile from "../../components/edit-profile/edit-profile.component";
import ViewProfile from "../../components/view-profile/view-profile.component";

const ProfilePage = ({ isLoggedIn }) => {
  const history = useHistory();
  console.log("History", history);

  // Similar to previous match property
  /**
  match.path - (string) The path pattern used to match. Useful for building nested <Route>s
  match.url - (string) The matched portion of the URL. Useful for building nested <Link>s
  
  Consider the route "/users/:userId". match.path would be "/users/:userId" while match.url 
  would have the :userId value filled in, e.g. "users/5" 
  
  */
  console.log("useRouteMatch", useRouteMatch());
  const { url, path } = useRouteMatch();

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  return (
    <>
      <div>
        {/** The "Profile Page" h1 would render in both edit-profile and view-profile components, 
      if you dont want that, create a new route with path={path} and in that component, move the 
      "Profile Page" h1. because its the root route in this case, put it at the end of Switch.
      use exact in previous routes if needed*/}

        <h1>Profile Page</h1>
      </div>
      <Link to={`${url}/edit-profile`}>Edit Profile</Link>
      <Link to={`${url}/view-profile`}>view Profile</Link>
      <Switch>
        <Route path={`${path}/edit-profile`} component={EditProfile} />
        <Route path={`${path}/view-profile`} component={ViewProfile} />
      </Switch>
    </>
  );
};

export default ProfilePage;
