import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <h2>React router</h2>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
