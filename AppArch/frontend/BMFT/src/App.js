import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/MainPages/Home";
import Nav from "./components/GeneralFeatures/Nav";
import Newsfeed from "./components/MainPages/Newsfeed";
import Involvement from "./components/MainPages/Involvement";
import WhoWeAre from "./components/MainPages/WhoWeAre"
import Footer from "./components/GeneralFeatures/Footer"
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
import Scientificresearch from './components/WWDFeatures/Scientificresearch';
import Developers from './components/WWDFeatures/Developers';
import NewsPages from './components/API/NewsPages';
import Login from './components/API/Login';
import ContactUsPage from './components/GeneralFeatures/ContactUs';

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <Home setNavbarVisible={setNavbarVisible} />
              <Footer />
            </>
          } />
          
          <Route path="/WhatWeDo" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <WhatWeDo />
              <Footer />
            </>
          } />

          <Route path="/News" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              {token ? <AdminNews /> : <Newsfeed />}
              <Footer />
            </>
          } />

          <Route path="/WhoWeAre" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <WhoWeAre />
              <Footer />
            </>
          } />
         
          <Route path="/Getinvolved" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav isVisible={isNavbarVisible} />
              <Involvement />
              <Footer />
            </>
          } />
         
          <Route path="/AgroProj" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <AgroProj />
              <Footer />
            </>
          } />

          <Route path="/communitystewards" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <Communitystewards />
              <Footer />
            </>
          } />

          <Route path="/ProtBio" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <ProtBio />
              <Footer />
            </>
          } />

          <Route path="/stewards2" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <Buildingstewards />
              <Footer />
            </>
          } />

          <Route path="/firemanagement" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav isVisible={isNavbarVisible} />
              <Fireman />
              <Footer />
            </>
          } />

          <Route path="/ourpeople" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <OurPeople />
              <Footer />
            </>
          } />

          <Route path="/staff" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <Staff />
              <Footer />
            </>
          } />

          <Route path="/outreach" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav isVisible={isNavbarVisible} />
              <Outreach />
              <Footer />
            </>
          } />

          <Route path="/patrols" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav isVisible={isNavbarVisible} />
              <Patrols />
              <Footer />
            </>
          } />

          <Route path="/scientificresearch" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav isVisible={isNavbarVisible} />
              <Scientificresearch />
              <Footer />
            </>
          } />
          
          <Route path="/Ourteam" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <Ourteam />
              <Footer />
            </>
          } />

          <Route path="/developers" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <Developers />
              <Footer />
            </>
          } />

          <Route path="/inprog" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <Inprog />
            </>
          } />
          
          <Route path="/settings" element={<Setting />} />

          <Route path="/login" element={<Login />} />

          <Route path="/article/:title" element={<NewsPages />} />

          <Route path="/contact" element={
            <>
              <Nav isVisible={isNavbarVisible} />
              <Mobilenav />
              <ContactUsPage />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;