import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>React router</h2>
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
