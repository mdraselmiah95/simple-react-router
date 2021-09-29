import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
