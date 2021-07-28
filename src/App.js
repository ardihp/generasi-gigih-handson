import "./App.css";
import Gallery from "./Pages/Gallery";
import Trending from "./Pages/Trending";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
