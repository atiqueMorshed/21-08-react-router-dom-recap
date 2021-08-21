import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";

import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import ProfilePage from "./pages/profile/profile.component";
import NotFound from "./components/not-found/not-found.component";
import Posts from "./components/posts/posts.component";
import Post from "./components/post/post.component";

//************************* */
// If you scroll to bottom in a page and then go to another link, it'll start from same position
// So, whenever you go to a different component, in the new component, use the following:
// useEffect(() => {
//   window.scroll(0, 0);
// }, [])
//************************* */

function App() {
  return (
    <BrowserRouter basename="/extraurl">
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts/" component={Posts} />
        <Route path="/" component={HomePage} exact />
        <Route component={NotFound} /> {/** 404 NOT FOUND PAGE */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
