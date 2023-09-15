import React from 'react'
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/routeHome/Home';
import Scoreboard from './components/routeScoreboard/Scoreboard';
import Singles from './components/routeSingles/SinglesScoreboard';
import Doubles from './components/routeDoubles/DoublesScoreboard';
import Record from './components/routeRecord/Records';
import Member from './components/routeMember/Members';
import Homey from './components/Homey';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import DrawerLeft from './components/DrawerLeft.js';
import Navbar from './components/Navbar';
import BottomNavigation from './components/BottomNavigation.js';
import { useState } from 'react';

function App() {
const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <Router>
        <DrawerLeft isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Scoreboard isAuth={isAuth}/>} />
          <Route path="/singles" element={<Singles />} />
          <Route path="/doubles" element={<Doubles />} />
          <Route path="/record" element={<Record />} />
          <Route path="/member" element={<Member />} />

          <Route path="/homey" element={<Homey/>}></Route>
          <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}></Route>
        </Routes>
        <BottomNavigation />
      </Router>
    </>
    
    
  );
}

export default App;
