import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/MainPages/Home";
import Nav from "./components/GeneralFeatures/Nav";
import Newsfeed from "./components/MainPages/Newsfeed";
import Involvement from "./components/MainPages/Involvement";
import FAQ from "./components/MainPages/FAQ"
import Footer from "./components/GeneralFeatures/Footer"
import Login from "./components/API/Login"
import WhatWeDo from "./components/MainPages/WhatWeDo";
import AgroProj from "./components/WWDFeatures/AgroProj";
import ProtBio from "./components/WWDFeatures/ProtBio";
import Outreach from "./components/WWDFeatures/Outreach";
import Rangers from "./components/BIOPages/Rangers";


function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);


  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/">
                <Nav isVisible={isNavbarVisible} />
                <Home setNavbarVisible={setNavbarVisible} />
                <Footer />
          </Route>
          
          <Route path = "/WhatWeDo">
            <Nav isVisible={isNavbarVisible} />
            <WhatWeDo></WhatWeDo>
            <Footer/>
          </Route>
          <Route path = "/News">
            <Nav isVisible={isNavbarVisible} />
            <Newsfeed></Newsfeed>
            <Footer/>
          </Route>
          <Route path = "/FAQ">
          <Nav isVisible={isNavbarVisible} />
          <FAQ></FAQ>
          <Footer/>
          </Route>
         
          <Route path = "/Involvement">
          <Nav isVisible={isNavbarVisible} />
          <Involvement></Involvement>
          <Footer/>
          </Route>
         
          <Route path = "/AgroProj">
          <Nav isVisible={isNavbarVisible} />
          <AgroProj></AgroProj>
          <Footer/>
          </Route>

          <Route path = "/ProtBio">
          <Nav isVisible={isNavbarVisible} />
          <ProtBio></ProtBio>
          <Footer/>
          </Route>

          <Route path = "/outreach">
          <Nav isVisible={isNavbarVisible} />
          <Outreach></Outreach>
          <Footer/>
          </Route>
          
          <Route path = "/rangers">
          <Nav isVisible={isNavbarVisible} />
          <Rangers></Rangers>
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
