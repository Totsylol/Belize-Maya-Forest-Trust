import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path = "/">
            <Home></Home> 
          </Route>
          </Switch>
          <Switch>
          <Route exact path = "/News">
            <Newsletter></Newsletter>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
