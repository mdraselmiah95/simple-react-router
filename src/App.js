import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Friends from "./components/Friends/Friends";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
