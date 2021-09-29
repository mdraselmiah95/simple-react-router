import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
