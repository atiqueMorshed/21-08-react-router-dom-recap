import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";

import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import ProfilePage from "./pages/profile/profile.component";
import NotFound from "./components/not-found/not-found.component";
import Posts from "./components/posts/posts.component";
import Post from "./components/post/post.component";
import React, { useState } from "react";

//************************* */
// If you scroll to bottom in a page and then go to another link, it'll start from same position
// So, whenever you go to a different component, in the new component, use the following:
// useEffect(() => {
//   window.scroll(0, 0);
// }, [])
//************************* */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter basename="/extraurl">
      <div className="App">
        <Header />

        {/** When Logged out, users won't be able to access profile page as we will be redirecting 
          them to homepage*/}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "logout" : "login"}
        </button>

        <Switch>
          {/** Redirect to homepage if logged out */}
          {/** Method 1: conditional render */}
          {/** 
            <Route path="/profile">
              {isLoggedIn ? <ProfilePage /> : <Redirect to="/" />}
            </Route>
          */}
          {/**Method 2: using useHistory */}
          <Route path="/profile">
            <ProfilePage isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/posts/" component={Posts} />
          <Route path="/" component={HomePage} exact />
          <Route component={NotFound} /> {/** 404 NOT FOUND PAGE */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
