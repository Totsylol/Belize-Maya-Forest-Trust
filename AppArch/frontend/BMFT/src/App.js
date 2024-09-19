import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/MainPages/Home";
import Nav from "./components/GeneralFeatures/Nav";
import Newsfeed from "./components/MainPages/Newsfeed";
import Involvement from "./components/MainPages/Involvement";
import WhoWeAre from "./components/MainPages/WhoWeAre"
import Footer from "./components/GeneralFeatures/Footer"
import Login from "./components/API/Login"
import WhatWeDo from "./components/MainPages/WhatWeDo";
import AgroProj from "./components/WWDFeatures/AgroProj";
import ProtBio from "./components/WWDFeatures/ProtBio";
import Outreach from "./components/WWDFeatures/Outreach";
import Ourteam from "./components/BIOPages/Ourteam";
import OurPeople from "./components/GeneralFeatures/OurPeople";
import Communitystewards from './components/WWDFeatures/Communitystewards';
import AdminNews from "./components/API/AdminNews";
import Setting from './components/API/Setting';
import Staff from './components/BIOPages/Staff';
import Inprog from './components/GIFeatures/Inprog';
import Mobilenav from './components/GeneralFeatures/Mobilenav';
import Fireman from './components/WWDFeatures/Fireman';
import Buildingstewards from './components/WWDFeatures/Buildingstewards';
import Patrols from './components/WWDFeatures/Patrols';

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const token = localStorage.getItem('token');


  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/">
                <Nav isVisible={isNavbarVisible} />
                <Mobilenav></Mobilenav>
                <Home setNavbarVisible={setNavbarVisible} />
                <Footer />
          </Route>
          
          <Route path = "/WhatWeDo">
            <Nav isVisible={isNavbarVisible} />
            <Mobilenav></Mobilenav>
            <WhatWeDo></WhatWeDo>
            <Footer/>
          </Route>

          <Route path = "/News">
            <Nav isVisible={isNavbarVisible} />
            <Mobilenav></Mobilenav>
            {token ? <AdminNews /> : <Newsfeed />}
            <Footer/>
          </Route>

          <Route path = "/WhoWeAre">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <WhoWeAre></WhoWeAre>
          <Footer/>
          </Route>
         
          <Route path = "/Getinvolved">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav isVisible={isNavbarVisible} />
          <Involvement></Involvement>
          <Footer/>
          </Route>
         
          <Route path = "/AgroProj">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <AgroProj></AgroProj>
          <Footer/>
          </Route>

          <Route path = "/communitystewards">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <Communitystewards></Communitystewards>
          <Footer/> 
          </Route>

          <Route path = "/ProtBio">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <ProtBio></ProtBio>
          <Footer/>
          </Route>

          <Route path = "/stewards2">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <Buildingstewards></Buildingstewards>
          <Footer/>
          </Route>

          <Route path = "/firemanagement">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav isVisible={isNavbarVisible} />
          <Fireman></Fireman>
          <Footer/>
          </Route>
         

          <Route path = "/ourpeople">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <OurPeople></OurPeople>
          <Footer/>
          </Route>

          <Route path = "/staff">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <Staff></Staff>
          <Footer/>
          </Route>

          <Route path = "/outreach">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav isVisible={isNavbarVisible} />
          <Outreach></Outreach>
          <Footer/>
          </Route>

          <Route path = "/patrols">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav isVisible={isNavbarVisible} />
          <Patrols></Patrols>
          <Footer/>
          </Route>
          
          <Route path = "/Ourteam">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
          <Ourteam></Ourteam>
          <Footer/>
          </Route>

          <Route path = "/inprog">
          <Nav isVisible={isNavbarVisible} />
          <Mobilenav></Mobilenav>
         <Inprog></Inprog>
          </Route>
          <Footer/>
       

          <Route path = "/Login">
          <Login></Login>
          </Route>

          <Route path = "/settings">
          <Nav isVisible={isNavbarVisible} />
          <Setting></Setting>
          <Footer/>
          </Route>
       
          

          </Switch>
          
          
      </Router>
      
    </div>
    
  );
}

export default App;
