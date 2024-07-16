import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Involvement from "./components/Involvement";
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path = "/">
          <Nav></Nav>
            <Home></Home> 
          </Route>
          
          <Route path = "/News">
          <Nav></Nav>
         
            <Newsletter></Newsletter>
          </Route>
          <Route path = "/FAQ">
          <Nav></Nav>
          <FAQ></FAQ>
          </Route>
         
          <Route path = "/Involvement">
          <Nav></Nav>
          <Involvement></Involvement>
          </Route>
          </Switch>
          
          <Footer/>
      </Router>
      
    </div>
    
  );
}

export default App;
