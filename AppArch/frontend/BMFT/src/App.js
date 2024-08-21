import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Involvement from "./components/Involvement";
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Login from "./components/API/Login"
import WhatWeDo from "./components/WhatWeDo";
import AgroProj from "./components/AgroProj";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path = "/">
          <Nav></Nav>
            <Home></Home> 
            <Footer/>
          </Route>
          
          <Route path = "/WhatWeDo">
            <Nav></Nav>
            <WhatWeDo></WhatWeDo>
            <Footer/>
          </Route>
          <Route path = "/News">
          <Nav></Nav>
            <Newsletter></Newsletter>
            <Footer/>
          </Route>
          <Route path = "/FAQ">
          <Nav></Nav>
          <FAQ></FAQ>
          <Footer/>
          </Route>
         
          <Route path = "/Involvement">
          <Nav></Nav>
          <Involvement></Involvement>
          <Footer/>
          </Route>
         
          <Route path = "/AgroProj">
          <Nav></Nav>
          <AgroProj></AgroProj>
          <Footer/>
          </Route>
          
       

          <Route path = "/Login">
          <Login></Login>
          </Route>
          </Switch>
          
          
      </Router>
      
    </div>
    
  );
}

export default App;
