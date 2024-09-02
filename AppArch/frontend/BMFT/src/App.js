import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/MainPages/Home";
import Nav from "./components/GeneralFeatures/Nav";
import Newsfeed from "./components/MainPages/Newsfeed";
import Involvement from "./components/MainPages/Involvement";
import WhoWeAre from "./components/MainPages/WhoWeAre"
import Footer from "./components/GeneralFeatures/Footer"
import Login from "./components/API/Login"
import Post from "./components/API/Post"
import WhatWeDo from "./components/MainPages/WhatWeDo";
import AgroProj from "./components/WWDFeatures/AgroProj";
import ProtBio from "./components/WWDFeatures/ProtBio";
import Outreach from "./components/WWDFeatures/Outreach";
import Rangers from "./components/BIOPages/Rangers";
import Staff from "./components/GeneralFeatures/Staff";
import Communitystewards from './components/WWDFeatures/Communitystewards';

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

          <Route path = "/WhoWeAre">
          <Nav isVisible={isNavbarVisible} />
          <WhoWeAre></WhoWeAre>
          <Footer/>
          </Route>
         
          <Route path = "/Getinvolved">
          <Nav isVisible={isNavbarVisible} />
          <Involvement></Involvement>
          <Footer/>
          </Route>
         
          <Route path = "/AgroProj">
          <Nav isVisible={isNavbarVisible} />
          <AgroProj></AgroProj>
          <Footer/>
          </Route>

          <Route path = "/communitystewards">
          <Nav isVisible={isNavbarVisible} />
          <Communitystewards></Communitystewards>
          <Footer/> 
          </Route>

          <Route path = "/ProtBio">
          <Nav isVisible={isNavbarVisible} />
          <ProtBio></ProtBio>
          <Footer/>
          </Route>

          <Route path = "/staff">
          <Nav isVisible={isNavbarVisible} />
          <Staff></Staff>
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

          <Route path = "/Post">
          <Post></Post>
          </Route>

          </Switch>
          
          
      </Router>
      
    </div>
    
  );
}

export default App;
