import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './LoginPage.css';
import Login from './LoginPage';
import Website from './website';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Workshops from './Workshop';
import Resources from './Resources';
import Contact from './contact';
import Help from './Help';
import GetStarted from './GetStarted';
import StartAdventure from './StartAdventure';
import ExploreMore from './ExploreMore';
import JoinCommunity from './JoinCommunity'; // Import the new component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/BlogPost" /> : <Login onLogin={handleLogin} />} />
        <Route path="/BlogPost" element={isLoggedIn ? <Website /> : <Navigate to="/" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/start-adventure" element={<StartAdventure />} />
        <Route path="/explore-more" element={<ExploreMore />} />
        <Route path="/join-community" element={<JoinCommunity />} /> {/* New route for JoinCommunity */}
      </Routes>
    </Router>
  );
};

export default App;
