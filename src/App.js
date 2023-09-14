import React from 'react'
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/routeHome/Home';
import Scoreboard from './components/routeScoreboard/Scoreboard';
import Record from './components/routeRecord/Records';
import Member from './components/routeMember/Members';
import Homey from './components/Homey';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import DrawerLeft from './components/DrawerLeft.js';
import BottomNavigation from './components/BottomNavigation.js';
import { useState } from 'react';

function App() {
const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <Router>
        <DrawerLeft isAuth={isAuth}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/record" element={<Record />} />
          <Route path="/member" element={<Member />} />

          <Route path="/homey" element={<Homey/>}></Route>
          <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
        </Routes>
        <BottomNavigation />
      </Router>
    </>
    
    
  );
}

export default App;
