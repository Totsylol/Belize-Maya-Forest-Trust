import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/MainPages/Home";
import Nav from "./components/GeneralFeatures/Nav";
import Newsletter from "./components/GeneralFeatures/Newsletter";
import Involvement from "./components/MainPages/Involvement";
import FAQ from "./components/MainPages/FAQ"
import Footer from "./components/GeneralFeatures/Footer"
import Login from "./components/API/Login"
import WhatWeDo from "./components/MainPages/WhatWeDo";
import AgroProj from "./components/WWDFeatures/AgroProj";
import ProtBio from "./components/WWDFeatures/ProtBio";
import Outreach from "./components/WWDFeatures/Outreach";

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

          <Route path = "/ProtBio">
          <Nav></Nav>
          <ProtBio></ProtBio>
          <Footer/>
          </Route>

          <Route path = "/outreach">
          <Nav></Nav>
          <Outreach></Outreach>
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
