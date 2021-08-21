import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";

import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import ProfilePage from "./pages/profile/profile.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
