import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Shared chrome + landing page load eagerly (needed on first paint)
import Nav from "./components/GeneralFeatures/Nav";
import Footer from "./components/GeneralFeatures/Footer";
import Mobilenav from './components/GeneralFeatures/Mobilenav';
import Home from "./components/MainPages/Home";
import PasswordGate from "./components/GeneralFeatures/PasswordGate";

// Every other page is split into its own chunk, loaded only when visited
const Newsfeed = lazy(() => import("./components/MainPages/Newsfeed"));
const Involvement = lazy(() => import("./components/MainPages/Involvement"));
const WhoWeAre = lazy(() => import("./components/MainPages/WhoWeAre"));
const WhatWeDo = lazy(() => import("./components/MainPages/WhatWeDo"));
const AgroProj = lazy(() => import("./components/WWDFeatures/AgroProj"));
const ProtBio = lazy(() => import("./components/WWDFeatures/ProtBio"));
const Outreach = lazy(() => import("./components/WWDFeatures/Outreach"));
const Ourteam = lazy(() => import("./components/BIOPages/Ourteam"));
const OurPeople = lazy(() => import("./components/GeneralFeatures/OurPeople"));
const Communitystewards = lazy(() => import('./components/WWDFeatures/Communitystewards'));
const AdminNews = lazy(() => import("./components/API/AdminNews"));
const Setting = lazy(() => import('./components/API/Setting'));
const Staff = lazy(() => import('./components/BIOPages/Staff'));
const Inprog = lazy(() => import('./components/GIFeatures/Inprog'));
const Fireman = lazy(() => import('./components/WWDFeatures/Fireman'));
const Buildingstewards = lazy(() => import('./components/WWDFeatures/Buildingstewards'));
const Patrols = lazy(() => import('./components/WWDFeatures/Patrols'));
const Scientificresearch = lazy(() => import('./components/WWDFeatures/Scientificresearch'));
const Developers = lazy(() => import('./components/WWDFeatures/Developers'));
const NewsPages = lazy(() => import('./components/API/NewsPages'));
const Login = lazy(() => import('./components/API/Login'));
const ContactUsPage = lazy(() => import('./components/GeneralFeatures/ContactUs'));

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const token = localStorage.getItem('token');

  return (
    <PasswordGate>
    <div className="App">
      <Router>
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
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
        </Suspense>
      </Router>
    </div>
    </PasswordGate>
  );
}

export default App;